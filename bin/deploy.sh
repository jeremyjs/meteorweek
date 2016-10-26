#!/bin/bash

ssh -T appuser@192.81.216.138 'bash -s' << EOF
  cd ~/apps/meteorweek
  git remote update -p
  git checkout $(git describe --tags `git rev-list --tags --max-count=1`)
EOF
