const jobList = document.getElementById("job-list")
const jobTemplate = document.getElementById("job-template")

export default async function jobs() {
  const JOBS_API = "jobs.json"
  const loadingMessage = document.getElementById("loading-message")
  try {
    const response = await fetch(JOBS_API)

    loadingMessage.textContent = "Loading..."

    if (response.ok) {
      const jobs = await response.json()
      jobs.forEach((job) => {
        const jobItem = jobTemplate.content.cloneNode(true)

        // List item
        const jobContainer = jobItem.querySelector("[data-job-container]")

        // Logo
        const logo = jobItem.querySelector("[data-job-logo]")
        logo.src = job.logo
        logo.alt = job.company

        // => Details: company name
        const company = jobItem.querySelector("[data-company]")
        company.classList.add("company")
        company.textContent = job.company

        // => Details: Status
        const jobStatus = jobItem.querySelector("[data-job-status]")

        // => Details => Status: new
        if (job.new) {
          const newJob = document.createElement("li")
          newJob.classList.add("new-job", "pill")
          newJob.textContent = "New!"
          jobStatus.append(newJob)
        }
        // => Details => Status: featured
        if (job.featured) {
          const featuredJob = document.createElement("li")
          featuredJob.classList.add("featured-job", "pill")
          featuredJob.textContent = "Featured"
          jobStatus.append(featuredJob)
        }

        // => Details: position
        const position = jobItem.querySelector("[data-position]")
        position.textContent = job.position

        // => Details: posted
        const posted = jobItem.querySelector("[data-posted]")
        posted.textContent = job.postedAt

        // => Details: contract
        const contract = jobItem.querySelector("[data-contract]")
        contract.textContent = job.contract

        // => Details: location
        const location = jobItem.querySelector("[data-location]")
        location.textContent = job.location

        // Buttons
        const jobButtons = jobItem.querySelector("[data-job-buttons]")

        // => Buttons: hardcoded
        // ==> Role
        const btnRole = jobItem.querySelector("[data-role]")
        btnRole.textContent = job.role

        // ==> Level
        const btnLevel = jobItem.querySelector("[data-level]")
        btnLevel.textContent = job.level

        // => Buttons: dynamically generated
        const languages = job.languages
        const tools = job.tools
        const languagesTools = [...languages, ...tools]

        languagesTools.forEach((item) => {
          const button = document.createElement("button")
          button.textContent = item

          // jobButtons.append(button)
          btnLevel.after(button)
        })

        // Append items to ul
        jobList.append(jobContainer)
      })

      loadingMessage.textContent = ""
    } else {
      loadingMessage.textContent =
        "Something went wrong. Please try again later..."
    }
  } catch (e) {
    console.log(e)
  }
}
