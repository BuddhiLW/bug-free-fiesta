(ns vcv.comp.cert
  (:require [vcv.state :as state]
            [vcv.helpers :as helpers]
            [vcv.comp.full-cert :refer [full-cert]]
            [reagent.core :as r]))

(defn modal-add
  "Element that enables the modal for the =gig-editor=-component."
  [cert-data values modal]
  [:button.btn.btn-warning.float-left
   {:on-click #(helpers/toggle-modal {:active true :cert cert-data}
                                     modal
                                     values)}
   "Click to expand"])

(defn cert
  "Display the certification for an activity."
  [id header img title inst descr link date modal cert-data values]
  [:div.col
   [:div.card.shadow.h-100 {:key id}
    [:h1.card-header.row.align-items.align-middle
     [:div.col header]
     [:div.col-5 [:span.test.text-center.w-100.align-middle inst]]
     [:div.col (modal-add cert-data values modal)]]
    [:div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9 {:on-click #(helpers/toggle-modal {:active true :cert cert-data}
                                                                                            modal
                                                                                            values)}
     [:img.card-img-top.img-fluid.rounded.img-thumbnail {:src img
                                                         :alt title
                                                         :on-click #(helpers/toggle-modal {:active true :cert cert-data}
                                                                                          modal
                                                                                          values)}]]
    [:div.card-body
     [:div.text-light.bg-dark.bg-gradient.border.text-center
      [:h3.card-title [:a.text-light {:href link} title]]]
     [:p.card-text descr]]
    [:div.card-footer
     [:small.text-muted date]]]])

(defn certs
  []
  (let [modal (r/atom {:active false})
        values (r/atom {:id (str "cert-" (random-uuid)) :header "" :title ""
                        :img "" :institution "" :platform "" :descr "" :tags ""
                        :link "" :date ""})]
    (fn []
      [:main.container
       (full-cert modal values)
       [:div.row.row-cols-1.row-cols-md-2.g-4
        (for [{:keys [id header img title institution descr link date] :as cert-data} (vals @state/certs)]
          (cert id header img title institution descr link date modal cert-data values))]])))
