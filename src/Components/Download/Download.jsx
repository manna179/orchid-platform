const Download = () => {
  return (
    <div className="flex flex-col spy-4">
      <div className="">
        <h2 className="text-xl font-bold"><span className="text-red-500">|</span> About Us</h2>
      </div>
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold ">Welcome to ORCHID!</h2>
        <p className="text-lg font-semibold">The Website for Best Movie Download.</p>
      </div>
      <div className="flex flex-col space-y-2 text-gray-600">
        <p>
          <span className="text-red-500 italic">ORCHID</span> is a free downloading
          Platform for any user. No Restrictions, No Malware/Virus. It’s
          reliable for you.
        </p>
        <div>
            <p> <span className="text-red-500 italic">ORCHID </span>does not rip or host any files on it’s servers. It’s hosted on various third party websites.</p>
            <p> <span className="text-red-500 italic">ORCHID</span> doesn’t accept the responsibility for contents hosted on third party websites.</p>
        </div>
        <p>Also  <span className="text-red-500 italic">ORCHID</span> doesn’t RIP/Pirate any file. We Just Collect Movie From the Internet / Other Websites. Nothing Else.</p>
        <p>So Visit us regularly and be updated with the everyday movie.</p>
        <p>Thank You.</p>
        <p className="text-red-500 italic text-lg font-medium">ORCHID Team</p>
      </div>
    </div>
  );
};

export default Download;
