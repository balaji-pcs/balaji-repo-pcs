import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProjectTab from '../components/ProjectTab'

export default function DashBoardRoutes() {
  return (<Routes>
        <Route path='/search' element={<h1>/search</h1>}/>
        <Route path='/customization' element={<h1>/customization</h1>}/>
        <Route path='/templates' element={<h1>/templates</h1>}/>
        <Route path='/dashboard' element={<h1>/dashboard</h1>}/>
        <Route path='/' element={<h1>/dashboard</h1>}/>
        <Route path='/time_tracking' element={<h1>/time_tracking</h1>}/>
        <Route path='/task_list' element={<h1>/task_list</h1>}/>
        <Route path='/lead_pipeline' element={<h1>/lead_pipeline</h1>}/>
        <Route path='/estimates' element={<h1>/estimates</h1>}/>
        <Route path='/invoices' element={<h1>/invoices</h1>}/>
        <Route path='/projects' element={<ProjectTab/>}/>
        <Route path='/schedule' element={<h1>/schedule</h1>}/>
        <Route path='/photos_&_files' element={<h1>/photos_&_files</h1>}/>
        <Route path='/customer' element={<h1>/customer</h1>}/>
        <Route path='/map' element={<h1>/map</h1>}/>
        <Route path='/report' element={<h1>1</h1>}/>
    </Routes>)
}
