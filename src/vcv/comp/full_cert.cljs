(ns vcv.comp.full-cert
  (:require [vcv.helpers :as helpers]))

(defn mini-cert
  [id header img title descr link date values modal]
  [:div.col
   [:div.card.shadow {:key id}
    [:h1.card-header.row.align-items
     [:div.col header]
     [:button.btn-close
        {:on-click #(do (helpers/toggle-modal {:active false} modal)
                        (reset! values {:id (str "cert-" (random-uuid)) :header "" :title ""
                                         :img "" :institution "" :platform "" :descr "" :tags ""
                                         :link "" :date ""}))}]]

    [:div.shadow-sm.mb-1.bg-body.rounded
     [:img.card-img-top {:src img
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
  [:div.modal.modal-xl (when (:active @modal) {:class "active"})
   [:div.modal-dialog.modal-fullscreen
    [:div.modal-content
     (let [{:keys [id header img title descr link date] :as values} @values]
      (mini-cert id header img title descr link date values modal))]]])
     ;; (full-cert-footer modal values)]]])
