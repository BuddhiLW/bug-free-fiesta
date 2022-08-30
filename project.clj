(defproject vcv "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.9.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async  "0.4.500"]
                 [binaryage/devtools "1.0.6"]
                 [cljs-ajax/cljs-ajax "0.8.4"]
                 [reagent "1.1.1"  :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]]

  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  ;; :aliases {"fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
  ;;           "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
  ;;           "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "hello-world.test-runner"]}

  ;; :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.17"]
  ;;                                 [org.slf4j/slf4j-nop "1.7.30"]
  ;;                                 [com.bhauman/rebel-readline-cljs "0.1.4"]]
  ;;                  :clean-targets ^{:protect false} [:target-path "resources/public/cljs-out"]}}

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                :figwheel {:on-jsload "vcv.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main vcv.core
                           :target :bundle
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/out/index.js"
                           :output-dir "resources/public/js/compiled/out"
                           :bundle-cmd {:none ["npx" "webpack" "--mode=development"]
                                        :default ["npx" "webpack"]}
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/vcv.js"
                           :main vcv.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]} ;; watch and update CSS
  ;;
  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
