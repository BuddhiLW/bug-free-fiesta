#!/usr/bin/env sh

lein cljsbuild once
rm -rf docs/*
cp -r resources/public/* docs/

git add docs/*
git commit -m "Deployment"

git push
