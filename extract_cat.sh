#!/bin/bash

echo "Starting category extraction..."

# Find all markdown files and process them
find . -name '*.md' -exec awk '/categories:/{flag=1;next}/^$/{flag=0}flag' {} \; | \
# Filter lines with categories and dashes, and then clean up the output
grep -E '^- ' | \
# Remove leading dash and spaces
sed 's/^- //' | \
# Sort and remove duplicates
sort | uniq

echo "Category extraction complete."

