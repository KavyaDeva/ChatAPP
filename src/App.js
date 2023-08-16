import React from 'react';
import ChatWidget from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

function App() {

  const handleNewUserMessage = async (newMessage) => {
    try {
      const response = await axios.post('https://api.chatgpt.com/v1/chat', {
        message: newMessage,
      }, {
        headers: {
          'Authorization': `Bearer 123ywfnh`,
        }
      });
      const message = response.data.data.answer;
      return message;
    } catch (error) {
      console.error(error);
      return "Sorry, I couldn't understand your message. Please try again.";
    }
  }

  return (
    <div className="App">
      <ChatWidget
        title="My Chat App"
        subtitle="Chat with ChatGPT"
        senderPlaceHolder="Type a message..."
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App1() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>New ChatApp</h1>
//       </header>
//     </div>
//   );
// }

// export default App1;
