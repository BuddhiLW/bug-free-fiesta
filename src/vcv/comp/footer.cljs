(ns vcv.comp.footer)

(defn footer
  []
  [:footer.mt-3
   [:div
    [:nav.navbar.navbar-dark.bg-dark.rounded-bottom
     [:h5.text-light.text-center.w-100 "BuddhiLW - GPL 3 or later -- "
      [:a.h5 {:href "https://github.com/BuddhiLW/bug-free-fiesta"}
       "https://github.com/BuddhiLW/bug-free-fiesta"]]]]])
   ;; [:img {:src "img/giggin-icon.png" :alt "Giggin logo"}]])
