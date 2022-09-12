(ns vcv.state
  (:require [reagent.core :as r]))
;; [clojure.string :as str]))

;; (def orders (r/atom {}))

(def certs (r/atom
            {:cert-02 {:id :cert-02
                       :title "Responsive Web Design"
                       :header "CSS"
                       :img "https://i.imgur.com/ADA4mnT.png"
                       :institution "freeCodeCamp"
                       :platform "Coursera"
                       :descr "A course with ~300 hours of credit, and 5 projects, about Responsive Web Design. This course teaches how query-selectors work and how to use them. Also, we are presented to popular CSS Frameworks."
                       :tags "CSS, Style Frameworks, Responsive Design"
                       :link "https://www.freecodecamp.org/certification/buddhilw/responsive-web-design"
                       :date "October, 2021"}
             :cert-03 {:id :cert-03
                       :title "EF SET Score - C2 (Maximum)"
                       :header "English"
                       :img "https://cdn.efset.org/efset-widget/img/certificate_78.png"
                       :institution "University of California - UCI"
                       :platform "EF Education"
                       :descr "English test, based on European Standards - 78 points, giving the C2 score, at the maximum-range."
                       :tags "English, European Standard, C2"
                       :date ", 2022"}
             :cert-04 {:id :cert-04
                       :title "Programming in Python"
                       :header "Python"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SN29CQ3RMC2R/CERTIFICATE_LANDING_PAGE~SN29CQ3RMC2R.jpeg"
                       :institution "Meta Inc."
                       :platform "Coursera"
                       :descr "The course goes through the use of Python, OOP, Classes, Objects, Decorators etc. Also, how Python can be used in the back-end."
                       :tags "Python, Back-end, OOP, Classes, Objects, Decorators"
                       :date "Agust 13, 2022"}
             :cert-05 {:id :cert-05
                       :title "Version Control"
                       :header "Git(hub)"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~S4SD93X9WM34/CERTIFICATE_LANDING_PAGE~S4SD93X9WM34.jpeg"
                       :institution "Meta Inc."
                       :platform "Coursera"
                       :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                       :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                       :date "Agust, 2022"}
             :cert-06 {:id :cert-06
                       :title "Concurrency in Go"
                       :header "Golang"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UKQYVFVH7MW9/CERTIFICATE_LANDING_PAGE~UKQYVFVH7MW9.jpeg"
                       :institution "University of California - UCI"
                       :platform "Coursera"
                       :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                       :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                       :date "Agust, 2022"}
             :cert-07 {:id :cert-07
                       :title "Functions, Methods and Interfaces"
                       :header "Golang"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EXAB2M49KM8T/CERTIFICATE_LANDING_PAGE~EXAB2M49KM8T.jpeg"
                       :institution "University of California - UCI"
                       :platform "Coursera"
                       :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                       :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                       :date "Agust, 2022"}

             :cert-08 {:id :cert-08
                       :title "Introduction to Docker: Build Your Own Portfolio Site"
                       :header "Docker"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XPNWAHHQF4EA/CERTIFICATE_LANDING_PAGE~XPNWAHHQF4EA.jpeg"
                       :institution "Coursera Project Network"
                       :platform "Coursera"
                       :descr "A course in which one learns how to lauch a site, using Docker."
                       :tags "Docker, Web Architecture"
                       :date "Setember 6, 2022"}

             :cert-09 {:id :cert-09
                       :title "Getting Started with Go"
                       :header "Golang"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~THWR8HR9CV9A/CERTIFICATE_LANDING_PAGE~THWR8HR9CV9A.jpeg"
                       :institution "University of California - UCI"
                       :platform "Coursera"
                       :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                       :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                       :date "Agust, 2022"}
             :cert-10 {:id :cert-10
                       :title "Introduction to Back-End Development"
                       :header "Backend"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DXNSMVEUUW7M/CERTIFICATE_LANDING_PAGE~DXNSMVEUUW7M.jpeg"
                       :institution "Meta Inc."
                       :platform "Coursera"
                       :descr "The course goes through development methods - Agile, TDD etc.; the infrastructure of the web, HTTP, CTP and other Protocols."
                       :tags "Back-end, Web, Web Architecture Design, Development methods"
                       :date "Agust 9, 2022"}
             :cert-11 {:id :cert-11
                       :header "Golang"
                       :title "Programming in Go"
                       :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33/CERTIFICATE_LANDING_PAGE~GUEFF86NTX33.jpeg"
                       :institution "University of California - UCI"
                       :platform "Coursera"
                       :descr "A course in which one learns about Data Structures and Algorithms in Golang, as well as how to change process computations, using Parallelism and Concurrency."
                       :tags "OOP, Methods, Interfaces, Concurrency, Paralellism"
                       :link "https://www.coursera.org/specializations/google-golang"
                       :date "Agust, 2022"}}))
;; :new "Fresh!"
                    ;; :cert-11 {:id :cert-11
                    ;;           :title "Introduction to Back-End Development"
                    ;;           :header "Back-end Dev."
                    ;;           :img "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DXNSMVEUUW7M/CERTIFICATE_LANDING_PAGE~DXNSMVEUUW7M.jpeg"
                    ;;           :institution "Meta Inc."
                    ;;           :platform "Coursera"
                    ;;           :descr "The course goes through development methods - Agile, TDD etc.; the infrastructure of the web, HTTP, CTP and other Protocols."
                    ;;           :tags "Back-end, Web, Web Architecture Design, Development methods"
                    ;;           :date "Agust 9, 2022"}}))

                    ;; :cert-11 {:id :cert-11
                    ;;           :title "Introduction to Back-End Development"
                    ;;           :header "Back-end Dev."
                    ;;           :img "https://d3njjcbhbojbot.cloudfront.net/web/images/signature/template-course-cert-small.png"
                    ;;           :institution "Meta Inc."
                    ;;           :platform "Coursera"
                    ;;           :descr "The course goes through development methods - Agile, TDD etc.; the infrastructure of the web, HTTP, CTP and other Protocols."
                    ;;           :tags "Back-end, Web, Web Architecture Design, Development methods"
                    ;;           :date "Agust 9, 2022"}}))
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
