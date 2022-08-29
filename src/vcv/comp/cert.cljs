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
;; [:i.bi.bi-back])

(defn cert
  "Display the certification for an activity."
  [id header img title descr link date modal cert-data values]
  [:div.col
   [:div.card.shadow {:key id}
    [:h1.card-header.row.align-items
     [:div.col header]
     [:div.col (modal-add cert-data values modal)]]
    [:div.shadow-sm.mb-1.bg-body.rounded {:on-click #(helpers/toggle-modal {:active true :cert cert-data}
                                                                           modal
                                                                           values)}
     [:img.card-img-top {:src img
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
        (for [{:keys [id header img title descr link date] :as cert-data} (vals @state/certs)]
          (cert id header img title descr link date modal cert-data values))]])))
          ;; (do
              ;; (js/console.log (str (:institution cert-data)))
;; {:institution "University of California - UCI", :tags "OOP, Methods, Interfaces, Concurrency, Paralellism", :date "Agust, 2022", :header "Golang", :title "Programming in Go", :link "https://www.coursera.org/specializations/google-golang", :id :cert-01, :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency.", :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33.jpeg", :platform "Coursera"}
