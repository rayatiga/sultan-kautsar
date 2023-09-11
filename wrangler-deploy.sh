echo "Deploying to: sultankautsar"
read -p "Enter commit message: " commitMessage
read -p "Enter directory to deploy: public/" directoryDeploy
echo "Deploy from directory public/$directoryDeploy with commit message $commitMessage"
wrangler pages deploy public/$directoryDeploy --project-name "sultankautsar" --commit-message "$commitMessage"
