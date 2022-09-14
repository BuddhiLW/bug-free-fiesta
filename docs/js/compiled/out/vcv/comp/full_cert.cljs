(ns vcv.comp.full-cert
  (:require [vcv.helpers :as helpers]))

(defn mini-cert
  "Certification shown on modal"
  [id header img title inst descr link date values modal]
  [:div.col-xxl.align-self-center.positive-relative
   [:div.card.shadow.mt-card {:key id}
    [:h1.card-header.row-cert.align-items.align-middle.border-bottom
     [:div.col.h1 header]
     [:div.col.container-fluid [:span.test.text-center.w-100.display-6.card-title-font
                                inst]]
     [:div.col.d-flex.flex-row-reverse
      [:button.btn-close.p-2
       {:on-click #(do (helpers/toggle-modal {:active false} modal)
                       (reset! values {:id (str "cert-" (random-uuid)) :header "" :title ""
                                       :img "" :institution "" :platform "" :descr "" :tags ""
                                       :link "" :date ""}))}]]]

    [:div.shadow-sm.mb-1.bg-body.rounded
     [:img.card-img-top.resize {:src img
                                :alt title}]]
    [:div.card-body
     [:div.text-light.bg-dark.bg-gradient.border.text-center
      [:h3.card-title [:a.text-light {:href link} title]]]
     [:p.card-text descr]]
    [:div.card-footer.row
     [:small.text-muted.col-9 date]
     [:button.btn.btn-secondary.col-3
      {:on-click #(do (helpers/toggle-modal {:active false} modal)
                      (reset! values {:id (str "cert-" (random-uuid)) :header "" :title ""
                                      :img "" :institution "" :platform "" :descr "" :tags ""
                                      :link "" :date ""}))}
      "Back to main page"]]]])

(defn full-cert
  [modal values]
  [:div.modal.modal-fullscreen (when (:active @modal) {:class "active"})
   [:div.modal-fullscreen
    [:div.modal-content
     (let [{:keys [id header img title descr institution link date] :as values} @values]
       (mini-cert id header img title institution descr link date values modal))]]])
     ;; (full-cert-footer modal values)]]])
