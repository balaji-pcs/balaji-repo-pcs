import React from 'react'
import { projectTimeLineViewdata } from '../utils/ProjectTimeLineViewDATA/projectTimeLineData'
import ProjectViewCards from '../components/ProjectViewCards'

export default function ProjectTimeLineViewTab() {
  return (<>
  {projectTimeLineViewdata?.map((item,index)=>{
    return <ProjectViewCards
    taskName={item.taskName} 
    completeBy={item.completeBy}
    due={item.due}
    general={item.general}
    moreInfo={item.moreInfo}
    projectFinancials={item.projectFinancials}
    index={index}
    />
  })}
  </>)
}
