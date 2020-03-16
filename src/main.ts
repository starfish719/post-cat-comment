import * as github from '@actions/github'
import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const number = Number(core.getInput('issueNumber'))
    const owner: string = core.getInput('owner')
    const repo: string = core.getInput('repo')
    const myToken: string = core.getInput('myToken')

    const octokit = new github.GitHub(myToken)

    const body = `
  ∧,,∧
（=・ω・）
（,, ｕｕﾉ`
    octokit.issues.createComment({owner, repo, number, body})
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
