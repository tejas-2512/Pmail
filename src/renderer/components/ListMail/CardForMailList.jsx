import React, { useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { MdOutlineMarkChatUnread, } from "react-icons/md";
function CardForMailList({
  Data,
  username,
  subject,
  body,
  time,
  isstarred,
  read,
  setisAnyMailOpen,
  setopenedmail,
  messageId,
  mailObject,
  CheckForSelectedDiv,
  ref,
  setcomposeopen,
}) {
  const [localStar, setlocalStar] = useState(isstarred);
  const [localread, setlocalread] = useState(read);

  let displayEmail = username.substr(0, username.indexOf('@')).concat("@pmail.com");
  let displaySubject = subject.indexOf('@') >= 0 ? subject.substr(0, subject.indexOf('@')).concat("@pmail.com") : subject.indexOf("Google")!=-1 ? "PMail" : subject;

  return (
    <div>
      <div
        className={
          "relative block px-3 py-2  text-text  bg-MailCardBackground  transition-shadow  cursor-pointer  shadow-xl group hover:shadow-lg overflow-hidden  m-2  rounded-lg"
        }
      >
        <div className="justify-between sm:flex">
          <div
            className="flex flex-col max-w-sm"
            onClick={() => {
              setisAnyMailOpen(true);
              setopenedmail(mailObject);
              setlocalread(true);
              setcomposeopen(false);
            }}
          >
            <div className="flex items-center ">
              <div className="flex-shrink-0 hidden  sm:block">
                <div className="h-10 w-10 rounded-full bg-MailCardUserIconBackground text-MailCardUserIconText  mr-1 items-center justify-center flex shadow-lg">
                  <span className="uppercase font-extrabold">
                    {subject[0]&&subject[0]!='G' ? subject[0] : "P"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                {/* <h5 className="text-sm font-bold ">{subject}</h5> */}
                <h5 className="text-sm font-bold ">{displaySubject}</h5>
                <p className="mt-1 text-xs font-medium text-primary-text">
                  {/* {username ? username : ""} */}
                  {displayEmail ? displayEmail : ""}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 truncate">{body}</p>
          </div>
          <div className="flex flex-col items-center">
            <span>{time}</span>
            {!localread ? (
              <div
                onClick={() => {
                  setlocalread(!localread);
                  CheckForSelectedDiv(messageId, "seen");
                }}
              >
                <span className="text-sm text-text">read</span>
              </div>
            ) : (
              <MdOutlineMarkChatUnread
                size={18}
                className="text-MailCardUnreadIcon"
                onClick={() => {
                  setlocalread(!localread);
                  CheckForSelectedDiv(messageId, "unread");
                }}
              />
            )}
            {localStar == true ? (
              <HiStar
                size={18}
                className="text-primary"
                onClick={() => {
                  setlocalStar(false);
                  CheckForSelectedDiv(messageId, "removestar");
                }}
              />
            ) : (
              <HiOutlineStar
                size={18}
                onClick={() => {
                  setlocalStar(true);
                  CheckForSelectedDiv(messageId, "star");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForMailList;
