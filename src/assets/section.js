import React from "react";

const Section = props => {
  //   let tab = [];
  //   for (let i = 0; i < data.length; i++) {
  //     tab.push(
  //       <div className="category">
  //         <p>{data[i].category}</p>
  //       </div>
  //     );
  //     let img = [];
  //     for (let j = 0; j < data[i].images.length; j++) {
  //       img.push(<img src={data[i].images[j]} alt="affiches série" />);
  //     }
  //     tab.push(<div className="images">{img}</div>);
  //   }

  //   return <div className="tab">{tab}</div>;
  // };
  return (
    <div>
      <div className="category">{props.object.category}</div>
      <div className="images">
        {props.object.images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img} alt="film" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
