(ns vcv.comp.full-cert
  (:require [vcv.helpers :as helpers]))

(defn full-cert-footer
  "Display the Cancel and Save buttons as well as act, on-click."
  [modal values]
  [:div.modal__footer
   [:button.btn.btn-secondary
    {:on-click #(do (helpers/toggle-modal {:active false} modal)
                    (reset! values {:id (str "cert-" (random-uuid)) :header "" :title ""
                                         :img "" :institution "" :platform "" :descr "" :tags ""
                                         :link "" :date ""}))}
    "-> Main page"]])

(defn full-cert
  [modal values]
  [:div.modal (when (:active @modal) {:class "active"})
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:h5.modal-title (str @values)]
      [:button.btn-close
        {:on-click #(do (helpers/toggle-modal {:active false} modal)
                        (reset! values {:id (str "cert-" (random-uuid)) :header "" :title ""
                                         :img "" :institution "" :platform "" :descr "" :tags ""
                                         :link "" :date ""}))}]]
     [:div.modal-body
      [:p "Modal body text goes here."]]
     (full-cert-footer modal values)]]])
