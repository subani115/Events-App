// Write your code here

import './index.css'

const activeStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const {registerStatus} = props
  console.log({registerStatus})

  const renderNoView = () => (
    <p className="status-heading">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderResultView = () => {
    switch (registerStatus) {
      case activeStatus.yetToRegister:
        return renderYetToRegisterView()
      case activeStatus.registrationClosed:
        return renderRegistrationsClosedView()
      case activeStatus.registered:
        return renderRegisteredView()
      default:
        return renderNoView()
    }
  }

  return <div className="active-registration-bg">{renderResultView()}</div>
}
export default ActiveEventRegistrationDetails
