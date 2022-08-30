(ns vcv.core
  (:require
        [goog.dom :as gdom]
        [reagent.dom :as rdom]
        [vcv.comp.cert :refer [certs]]))


(defn app []
  [certs])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; ;; specify reload hook with ^:after-load metadata
;; (defn ^:after-load on-reload []
;;   (mount-app-element))
;; (rd/render [hello-world]
;;            (. js/document (getElementById "app")))

;; (defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

