import React from 'react';
import data from './data/data.json';
import profileIcon from './person.svg';

let Resume = (prop) => {
    let info = data.profiles[prop.location.data.id];
    return (
        <div className="row justify-content-center">
            {/* Left part*/}
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body p-2 text-center">
                        <img src={profileIcon} alt="Profile icon" style={{ width: "15%" }} />
                        <h2>{info.basics.name} </h2>
                        <h5 className="text-secondary" style={{ fontStyle: "italic" }}>{info.basics.role}</h5> <hr />
                        <a href={"mailto:" + info.basics.email}> {info.basics.email}</a> <br>
                        </br>
                        <a href={"tel:" + info.basics.mobile}>{info.basics.mobile}</a><br />
                        <p>{info.basics.address} </p>
                    </div>

                </div>
            </div>
            {/*Right part*/}
            <div className="col-lg-8 m-2">
                <div className="card shadow">
                    <div className="card-body p-2">



                        <h3> Summary</h3> <hr />
                        <ul>
                            {info.summary.map((summaryValue, summaryIndex) => (
                                <li key={summaryIndex}>
                                    {summaryValue}
                                </li>
                            ))}
                        </ul>



                        
                        <h3>Educational Qualifications</h3><hr />
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Degree</th>
                                        <th>Institute</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {info.education.map((educationValue, educationIndex) => (
                                        <tr key={educationIndex}>
                                            <td>{educationValue.degree} </td>
                                            <td>{educationValue.institute} </td>
                                            <td>{educationValue.result} </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>


                        <h3> Skills</h3> <hr />
                        <ul>
                            {info.skills.map((skillsValue, skillsIndex) => (
                                <li key={skillsIndex}>
                                    {skillsValue}
                                </li>
                            ))}
                        </ul>


                        <h3> Languages</h3> <hr />
                        <ul>
                            {info.languages.map((languagesValue, languagesIndex) => (
                                <li key={languagesIndex}>
                                    {languagesValue}
                                </li>
                            ))}
                        </ul>



                        <h3> Activities</h3> <hr />
                        <ul>
                            {info.clubs.map((clubsValue, clubsIndex) => (
                                <li key={clubsIndex}>
                                    {clubsValue}
                                </li>
                            ))}
                        </ul>


                    </div>

                </div>
            </div>



        </div>
    )
}

export default Resume;