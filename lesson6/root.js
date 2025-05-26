function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from Singapore</li>
}

function WelcomeMessageJerry() {
  return <li>Welcome Jerry from Malaysia</li>
}

function WelcomeMessageSarah() {
  return <li>Welcome Sarah from Indonesia</li>
}

function WelcomeMessagesList() {
  return <ul>
    <WelcomeMessageTom />
    <WelcomeMessageJerry />
    <WelcomeMessageSarah />
  </ul>
}

function WelcomeMessagesSection() {q
  return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
  </div>
}

function App() {
  return <div>
    <WelcomeMessagesSection />
  </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)