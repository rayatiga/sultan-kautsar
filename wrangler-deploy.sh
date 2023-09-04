read -p "Commit message: " commitMessage
wrangler pages deploy public/v2/ --project-name "sultankautsar" --commit-message "$commitMessage"
