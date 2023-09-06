echo "Deploying to: sultankautsar"
read -p "Enter commit message: " commitMessage
wrangler pages deploy public/ --project-name "sultankautsar" --commit-message "$commitMessage"
