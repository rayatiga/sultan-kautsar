// Achievement
let achievements = [
  {
    title: 'IT Support Google',
    excerpt: "Those who have earned Google's Professional IT Support Certificate have completed five courses developed by Google, which include hands-on, hands-on assessments and are designed to prepare them for entry-level IT support positions. They have competence in basic skills, including problem solving and customer service, networking, operating systems, systems administration, and security.",
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/QJT55DKGDYRH',
    tag: ['Google', 'Coursera', 'Specialization'],
  },
  {
    title: 'Architecting with Google Compute Engine',
    excerpt: 'In this five-course accelerated specialization, learners explored and deployed solution elements, including infrastructure components such as networks, systems and applications services using Google Cloud Platform, with a focus on Compute Engine.',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/U47F93996VM2',
    tag: ['Google', 'Coursera', 'Specialization'],
  },
  {
    title: 'Bangkit Academy 2022 Cloud Computing',
    excerpt: 'Bangkit is a Google-led academy designed to produce high-caliber technical talent for world-class Indonesian technology companies and startups. Presented to me for successfully completing Bangkit, specializing in Cloud Computing, with Disctiction.',
    url: 'http://127.0.0.1:5500/asset/pdf/achievement-bangkit-academy-2022.pdf',
    tag: ['Google', 'Bangkit', 'Specialization'],
  },
  {
    title: 'Baseline: Infrastructure',
    excerpt: 'Cloud developer looking for hands-on practice beyond Google Cloud Essentials. Practical experience through labs that dive into Cloud Storage and other key application services like Stackdriver and Cloud Functions. Develop valuable skills that are applicable to any Google Cloud initiative. 1-minute videos walk you through key concepts for these labs.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2939439',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Automating Infrastructure on Google Cloud with Terraform',
    excerpt: 'Learn how to write infrastructure as code with Terraform also hands-on experience building, changing, and destroying infrastructure, managing local and remote state, importing infrastructure, and building your own modules.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2597554',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Serverless Cloud Run Development',
    excerpt: 'Learn how to do the following using Cloud Run by connecting and leveraging data stored in Cloud Storage, building a resilient, asynchronous system with Cloud Run and Pub/Sub, building a REST API gateway using Cloud Run, building and exposing service using Cloud Run.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2597400',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    excerpt: "Google Cloud Fundamentals: Core Infrastructure introduces important concepts and terminology for working with Google Cloud. Through videos and hands-on labs, this course presents and compares many of Google Cloud's computing and storage services, along with important resource and policy management tools.",
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2597233',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Integrate with Machine Learning APIs',
    excerpt: 'Learn the basic features for the following machine learning and AI technologies: Cloud Vision API, Cloud Cloud Translation API, and Cloud Natural Language API.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2594861',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Website on Google Cloud',
    excerpt: 'On completing this quest, finish the additional challenge lab at the end of this Build a Website on Google Cloud to receive an exclusive Google Cloud digital badge. This quest is based on the video series Get Cooking in Cloud.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2591790',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Kubernetes Solutions',
    excerpt: 'Exposed to a wide range of Kubernetes use cases and will get hands-on practice architecting solutions over the course of 8 labs. From building Slackbots with NodeJS, to deploying game servers on clusters, to running the Cloud Vision API, Kubernetes Solutions will show about first-hand how agile and powerful this container orchestration system is.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/2591753',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Cloud Logging',
    excerpt: 'Cloud Logging is a fully managed service that performs at scale. It can ingest application and system log data from thousands of VMs and, even better, analyze all that log data in real time. I learn how to store, search, analyze, monitor, and alert on log data and events from Google Cloud.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1973261',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Deploy to Kubernetes in Google Cloud',
    excerpt: 'Learn about Google Kubernetes Engine and multiple deployment approaches including how to: configure and build images to run and debug Docker containers, build Kubernetes Engine clusters, and manage them with kubectl, deploy Kubernetes applications using deployments and continuous delivery techniques.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1844783',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Security & Identity Fundamentals',
    excerpt: "Get hands-on practice with Google Cloud's Identity and Access Management (IAM) service, which is the go-to for managing user and virtual machine accounts.",
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1840461',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Optimizing Your Google Cloud Costs',
    excerpt: 'Learn several ways to control and optimize your Google Cloud costs, including setting up budgets and alerts, managing quota limits, and taking advantage of committed use discounts.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1840313',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Understanding Your Google Cloud Costs',
    excerpt: 'Learn how to set up a billing account, organize resources, and manage billing access permissions. In the hands-on labs learned how to view your invoice, track your Google Cloud costs with Billing reports, analyze your billing data with BigQuery or Google Sheets, and create custom billing dashboards with Looker Studio. References made to links in the videos can be accessed in this Additional Resources document.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1822127',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Cloud Architecture: Design, Implement, and Manage',
    excerpt: 'Learn how to: deploy a publicly accessible website using Apache web servers, manage the configuration of a Compute Engine VM using startup scripts, configure a firewall using Cloud Deployment Manager, configure secure RDP using a Windows Bastion host and firewall rules, build and deploy a Docker image to a Kubernetes cluster and then update it, and create a CloudSQL instance and import a MySQL database.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1822059',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Monitor and Log with Google Cloud Operations Suite',
    excerpt: "Learn about common tasks when starting with Google Cloud's operations suite, including how to monitor virtual machines in Compute Engine; use Cloud Monitoring to monitor multiple projects; extend monitoring and logging for Cloud Functions; create and send custom metrics for application data; create Cloud Monitoring alerts based on custom metrics; adjust resources based on monitoring metrics.",
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1817248',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Build and Secure Networks in Google Cloud',
    excerpt: 'Learn about multiple networking-related resources to build, scale, and secure your applications on Google Cloud.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1805836',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Deploy and Manage Cloud Environments with Google Cloud',
    excerpt: 'Learn how to: use the gcloud CLI tool to set up and configure command features of Cloud Identity and Access Management (IAM), deploy and scale a Web App on Google Compute Engine, provision a complete Kubernetes cluster using Google Container Engine (GKE) and break an application into microservices using Kubernetes Deployments and Services, perform basic networking tasks on Google Cloud Platform, view BigQuery logs inside Cloud Logging and set up a sink to export them back into BigQuery, and migrate a stand-alone PostgreSQL database to Cloud SQL for PostgreSQL using a continuous Database Migration Service job and VPC peering for conectivity.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1801305',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Set Up and Configure a Cloud Environment in Google Cloud',
    excerpt: 'Learn multiple ways to deploy and monitor applications including how to: explore IAM rols and add/remove project access, create VPC networks, deploy and monitor Compute Engine VMs, write SQL queries, deploy and monitor VMs in Compute Engine, and deploy applications using Kubernetes with multiple deployment approaches.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1801192',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
    excerpt: 'Learn the basic features for the following machine learning and AI technologies: BigQuery, Cloud Speech AI, Cloud Natural Language API, AI Platform, Dataflow, Cloud Dataprep by Trifacta, Dataproc, and Video Intelligence API.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1798235',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Perform Foundational Infrastructure Tasks in Google Cloud',
    excerpt: 'Learn how to build and connect storage-centric cloud infrastructure using the basic capabilities of the of the following technologies: Cloud Storage, Identity and Access Management, Cloud Functions, and Pub/Sub.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1796136',
    tag: ['Google', 'GCSB', 'Modernization Skill'],
  },
  {
    title: 'Create and Manage Cloud Resources',
    excerpt: 'Learn how to do the following: Write gcloud commands and use Cloud Shell, create and deploy virtual machines in Compute Engine, run containerized applications on Google Kubernetes Engine, and configure network and HTTP load balancers.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1796077',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Build a Website on Google Cloud',
    excerpt: 'Learn how to: Deploy a website on Cloud Run, Host a web app on Compute Engine, Create, deploy, and scale your website on Google Kubernetes Engine, Migrate from a monolithic application to a microservices architecture.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1793402',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Build Interactive Apps with Google Assistant',
    excerpt: 'Learn how to build Google Assistant applications, including how to: create an Actions project, integrate Dialogflow with an Actions project, test your application with Actions simulator, build an Assistant application with flash cards template, integrate customer MP3 files with your Assistant application, add Cloud Translation API to your Assistant application, and use APIs and integrate them into your applications.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1792769',
    tag: ['Google', 'GCSB', 'Modernization Skill'],
  },
  {
    title: 'Implement DevOps in Google Cloud',
    excerpt: 'Learn about DevOps - an organizational and cultural movement that aims to increase software delivery velocity, improve service reliability, and build shared ownership among software stakeholders. Specifically, you will learn how to: create a git repository using Google Cloud Source Repositories, launch, manage, and scale deployments using Google Kubernetes Engine, and create a CI/CD pipeline that automatically builds a container image from committed code and and deploys the application to Google Kubernetes Engine.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1791318',
    tag: ['Google', 'GCSB', 'Skill Badge'],
  },
  {
    title: 'Google Developer Essentials',
    excerpt: 'Learn how to develop and scale applications without setting up infrastructure, run data analytics, gain insights from data, and develop with pre-trained ML APIs to leverage machine learning even not a Machine Learning expert.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1790092',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
    excerpt: 'The courses are in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud This final course in the series reviews managed big data services, machine learning and its value, and how to demonstrate your skill set in Google Cloud',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1782898',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Google Cloud Computing Foundations: Networking & Security in Google Cloud',
    excerpt: 'The courses are in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud This third course covers cloud automation and management tools and building secure networks.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1774555',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
    excerpt: 'The courses are in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1770886',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    excerpt: 'The courses are in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud This first course provides an overview of cloud computing, ways to use Google Cloud, and different compute options.',
    url: 'https://www.cloudskillsboost.google/public_profiles/1ce55bb8-54a4-49b4-83aa-20d5e35b873c/badges/1766922',
    tag: ['Google', 'GCSB', 'Completion Badge'],
  },
  {
    title: 'Dicoding Academy Certified Create Back-End Apps with Google Cloud',
    excerpt: "This class is intended for individuals who want to step up to become a Back-End Developer with Google's international competency standards. At the end of the class, students can build a simple RESTful API independently to support the functionality of an application.",
    url: 'https://www.dicoding.com/certificates/EYX47477OXDL',
    tag: ['Google', 'Dicoding', 'Google Developers'],
  },
  {
    title: 'EPrT (English Proficiency Test) Certified',
    excerpt: 'Has taken a/an English Proficiency Test - Home Edition at Telkom University Language Center. The results of the test are as follows. Listening Competence (49) Grammar Competence (49) Reading Competence (48) TOTAL SCORE: 487.',
    url: 'https://sultankautsar.com/asset/pdf/achievement-lac-eprt.pdf',
    tag: ['Tel-U', 'EPrT', 'Language Test'],
  },
  {
    title: 'More Achievement',
    excerpt: 'Click button "Complete Achievement" below to see all the achievements!',
    url: '',
    tag: ['More', 'More', 'More'],
  },
]
let achievement = document.getElementById('achievement')
for (let index = 0; index < achievements.length; index++) {
  achievement.innerHTML += `<div class="col-md-6 col-lg-6 mb-4">
                              <div class="card border-dark shadow-sm h-100">
                              <div class="card-header d-flex flex-wrap gap-1 small"><span class="${achievements[index].tag[0] == 'Google' || achievements[index].tag[0] == 'Tel-U' || achievements[index].tag[0] == 'More' ? 'text-bg-danger' : 'text-bg-dark'} rounded-1 px-1">${achievements[index].tag[0]}</span><span class="${achievements[index].tag[1] == 'Coursera' ? 'text-bg-primary' : achievements[index].tag[1] == 'Bangkit' ? 'text-bg-dark' : 'text-bg-success'} rounded-1 px-1">${achievements[index].tag[1]}</span><span class="${achievements[index].tag[2] == 'Google Developers' ? 'text-bg-warning' : achievements[index].tag[2] == 'Specialization' || achievements[index].tag[2] == 'Modernization Skill' || achievements[index].tag[2] == 'Language Test' || achievements[index].tag[2] == 'More' ? 'text-bg-light border border-dark' : achievements[index].tag[2] == 'Completion Badge' ? 'text-bg-secondary' : 'text-bg-warning'} rounded-1 px-1">${achievements[index].tag[2]}</span></div>
                                <div class="card-body">
                                  <h5 class="card-title fw-bold">${achievements[index].title}</h5>
                                    <p class="card-text mb-2">${achievements[index].excerpt}</p>
                                </div>
                                <div class="card-footer">
                                  <a href="${achievements[index].url}" rel="nofollow noopener noreferrer" class="text-decoration-none link-dark small float-end" target="_blank">View Certificate <i class="bi bi-box-arrow-up-right"></i></a>
                                </div>
                              </div>
                            </div>`
}
