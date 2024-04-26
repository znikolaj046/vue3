import { type Cards } from '../cards'
import { type Project } from '../projects'
import { type Stage } from '../stages'


function getCardProjectFilter(project: string) {
  return function (element: Cards) {
    if (element.project) {
      return element.project.indexOf(project) != -1
    } else {
      return false
    }
  }
}

function getCardProjectName(project: string) {
  return function (element: Project) {
    return element.code.indexOf(project) != -1
  }
}

function getStageCard(stage: string) {
  return function (element: Cards) {
    return element.stage.indexOf(stage) != -1
  }
}

function compareAsc(a: Cards, b: Cards) {
  if (a.score < b.score) {
    return -1
  }
  if (a.score > b.score) {
    return 1
  }
  return 0
}

function compareDesc(a: Cards, b: Cards) {
  if (a.score > b.score) {
    return -1
  }
  if (a.score < b.score) {
    return 1
  }
  return 0
}

export function setProjectFilter(cards: Array<Cards>, project: string) {
  //for (let i = 0; i < stages.length; i++) {
  const cardsFiltered = cards.filter(getCardProjectFilter(project))    
  //}
  return cardsFiltered
}

export function sortCards(cards: Array<Cards>, direction:number){
  console.log(cards) 
  if (direction == 1) {
    cards.sort(compareAsc)
  } else {
    cards.sort(compareDesc)
  }  
  return cards
}

export function gatherData(stages: Array<Stage>) {
  /**/

  return stages
}

export function gatherCards(cards: Array<Cards>, projects: Array<Project>, stages: Array<Stage>) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].project === false) continue

    const projectName = projects.filter(getCardProjectName(cards[i].project))
    if (projectName.length > 0) {
      cards[i].projectName = projectName[0].name
    }
  }

  const outCards = []

  for (let i = 0; i < stages.length; i++) {
    const stageCards = cards.filter(getStageCard(stages[i].code))
    outCards[i] = stageCards
  }

  return outCards
}

/*  return {
    gatherData,
    setProjectFilter,
    compareDesc,
    compareAsc
  }
}*/
