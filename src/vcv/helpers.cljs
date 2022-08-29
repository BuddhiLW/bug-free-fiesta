(ns vcv.helpers)

(defn toggle-modal
  ([{:keys [active]} modal]
   (swap! modal assoc :active active))
  ([{:keys [active cert]} modal values]
   (js/console.log (str "hello!!"))
   (swap! modal assoc :active active)
   (reset! values cert)
   (js/console.log (str "Bye bye"))))
