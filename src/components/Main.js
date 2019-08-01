import React from 'react'

class Main extends React.Component {
   constructor() {
      super()

      this.state = {
         developers: [],
      }
   }

   componentWillMount() {}

   shuffle_list() {}

   render() {
      return (
         <div className="container">
            <div className="row mt-3">
               <div className="col-8">
                  <h1>Add a new punch</h1>
                  <div className="row">
                     <div className="col-2">
                        <p>Date</p>
                     </div>
                     <div className="col-2">
                        <p>Time</p>
                     </div>
                     <div className="col-3">
                        <p>Project</p>
                     </div>
                     <div className="col-3">
                        <p>Role</p>
                     </div>
                     <div className="col-2">
                        <p />
                        <button className="btn btn-primary btn-block">
                           Save
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-4">
                  <h1>Punch log</h1>
               </div>
            </div>
         </div>
      )
   }
}

export default Main
