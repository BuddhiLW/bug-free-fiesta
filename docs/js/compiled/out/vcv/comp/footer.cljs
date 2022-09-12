(ns vcv.comp.footer)

(defn footer
  []
  [:footer.mt-3
   [:div
    [:nav.navbar.navbar-dark.bg-dark.rounded-bottom
     [:h5.text-light.text-center.w-100.text-white-50 "BuddhiLW - "
      [:a.text-info {:href "https://creativecommons.org/licenses/by-sa/4.0/"} "GPL 4 Attribution-ShareAlike"]
      " -- "
      [:a.h5.text-warning {:href "https://github.com/BuddhiLW/bug-free-fiesta"}
       "Github link"]]]]])
   ;; [:img {:src "img/giggin-icon.png" :alt "Giggin logo"}]])
