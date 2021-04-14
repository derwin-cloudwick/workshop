#!/usr/bin/env bash

rm -rf ./static/temp/*.json
find docs/ -name "_sidebar.json" | while IFS= read -r NAME; do
    actualPath="${NAME/\/\///}"
    fullPath="${actualPath/docs\//}"
    relativePath="${fullPath/_sidebar.json/}"
    tempFilePath="./static/temp/${NAME//\//_}"
    jq --arg relativePath "${relativePath}" '(.. | .id?) |= if . then $relativePath + . else empty end | (.. | .items?) |= if . then (.[] |= if type=="string" then $relativePath + . else . end) else empty end' ${actualPath} > ${tempFilePath}
done
jq -rs 'reduce .[] as $item ({}; . * $item)' ./static/temp/*.json > ./static/combined_sidebars.json
cat > ./sidebars.js <<EOF
module.exports = $(<./static/combined_sidebars.json)
EOF

rm -rf ./static/temp/*.json
rm ./static/combined_sidebars.json
echo "workshop.amorphicdata.io" >> ./static/CNAME