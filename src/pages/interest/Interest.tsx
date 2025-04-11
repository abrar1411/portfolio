const Interest = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Interest
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-4  text-start ">
        <p>
          <strong> Database Management System- </strong>experienced in designing schemas, writing optimized SQL queries, and managing data using PostgreSQL and MySQL.
        </p>
        <p>
          <strong>Machine Learning – </strong>Using tensowrflow and PyTorch to
          build and deploy machine learning models, with a focus on
          computer vision and natural language processing.
        </p>
        <p>
          <strong>Football – </strong> Played competitive college football, fostering both team spirit and tactical mindset.
        </p>
        <p>
          <strong>Computer Networks – </strong>
          Hands-on experience with computer networks, applying logical thinking and troubleshooting skills in practical scenarios .
        </p>
        <p>
          <strong> Participation – </strong> attending CCNA workshops done by Cisco
          and workshops on machine learning and artificial intelligence.
        </p>
      </div>
    </div>
  );
};

export default Interest;
