(ns vcv.state
  (:require [reagent.core :as r]))
;; [clojure.string :as str]))

;; (def orders (r/atom {}))

(def certs (r/atom {:cert-01 {:id :cert-01
                              :header "Golang"
                              :title "Programming in Go"
                              :img "
https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33.jpeg"
                              :institution "University of California - UCI"
                              :platform "Coursera"
                              :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                              :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                              :link "https://www.coursera.org/specializations/google-golang"
                              ;; :new "Fresh!"
                              :date "Agust, 2022"}
                    :cert-02 {:id :cert-02
                              :title "Responsive Web Design"
                              :header "CSS"
                              :img "https://i.imgur.com/ADA4mnT.png"
                              :institution "freeCodeCamp"
                              :platform "Coursera"
                              :descr "A course with ~300 hours of credit, and 5 projects, about Responsive Web Design. This course teaches how query-selectors work and how to use them. Also, we are presented to popular CSS Frameworks."
                              :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                              :link "https://www.freecodecamp.org/certification/buddhilw/responsive-web-design"
                              :date "October, 2021"}
                    :cert-03 {:id :cert-03
                              :title "EF SET Score - C2 (Maximum)"
                              :header "English"
                              :img "https://cdn.efset.org/efset-widget/img/certificate_78.png"
                              :institution "University of California - UCI"
                              :platform "EF Education"
                              :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                              :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                              :date "Agust, 2022"}
                    :cert-04 {:id :cert-04
                              :title "Getting Started with Go"
                              :header "Golang"
                              :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~THWR8HR9CV9A/CERTIFICATE_LANDING_PAGE~THWR8HR9CV9A.jpeg"
                              :institution "University of California - UCI"
                              :platform "Coursera"
                              :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                              :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                              :date "Agust, 2022"}}))

;; :price 1000
;; :sold-out false}}))

;; (defn insert-gig
;;   [{:keys [id title desc price img sold-out]}]
;;   (swap! gigs assoc
;;         id
;;         {:id id
;;          :title (str/trim title)
;;          :desc (str/trim desc)
;;          :img (str/trim img)
;;          :price (js/parseInt price)
;;          :sold-out sold-out}))
