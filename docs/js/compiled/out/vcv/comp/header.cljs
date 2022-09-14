(ns vcv.comp.header)

(defn header
  []
  [:div.row
   [:div.col
    [:nav.navbar.navbar-dark.bg-dark.bg-gradient.rounded-top.justify-content-center.row
     [:nav.item.text-light.col
      [:span.display-1.test.text-center.w-100.align-middle.cert-font "Certifications"]]
     [:hr.border.border-danger.border-2.opacity-75]]]])
