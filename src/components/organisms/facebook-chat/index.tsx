import Script from 'next/script';

const FacebookMessage = () => {
    return (
      <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat" style={{ display: 'none' }}></div>
      <Script strategy="lazyOnload" id="init-fb-script">
        {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "560705814008370");
            chatbox.setAttribute("theme_color", "#8EB84A");
            chatbox.setAttribute("minimized", "true");
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v16.0'
              });

              FB.Event.subscribe('customerchat.load', FB.CustomerChat.hide());
              let iconChatbox;
              let intervalIframe = setInterval(function() {
                iconChatbox = document.getElementsByClassName('fb_dialog fb_dialog_advanced')[0];

                if(iconChatbox) {
                  clearInterval(intervalIframe);

                  let messengerRoot = document.getElementById('fb-root');
                  messengerRoot.style.opacity = 1;
                  iconChatbox.childNodes[0].childNodes[0].style.display = 'none';
                  FB.CustomerChat.showDialog();

                  let fakeButton = document.getElementById('sticky-chat-fb');
                  if(fakeButton) {
                    fakeButton.style.display = 'block';
                    fakeButton.addEventListener('click', function() {
                      FB.CustomerChat.showDialog();
                    });
                  }
                }
              }, 1000);

            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = '/script/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
      </>
    );
};

export default FacebookMessage;
