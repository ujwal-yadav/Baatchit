import React, { useEffect, useState } from "react";

export const Contacts = ({
  contacts,
  contactsLoader,
  currentUser,
  changeChat,
}) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    console.log(contacts);
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {contactsLoader == true ? (
        <div
          class="d-flex justify-content-center align-items-center"
          style={{ height: "80%" }}
        >
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {currentUserImage && currentUserImage && (
            <div id="contacts">
              {contacts?.map((contact, index) => {
                return (
                  <div
                    onClick={() => changeCurrentChat(index, contact)}
                    key={index}
                    className={`contact ${
                      index == currentSelected ? "active" : ""
                    }`}
                  >
                    <img
                      style={{ height: "40px" }}
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                    <div className="name">{contact.username}</div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};
