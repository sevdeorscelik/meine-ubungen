import React from "react"


const Spa004 = () => {

    const companies = [
        { id: 1, title: "Nike" },
        { id: 2, title: "Adidas" },
        { id: 3, title: "Puma" },
        { id: 4, title: "New Balance" },
        { id: 5, title: "ASICS" }
    ];

    const events = [
        {
            title: "Meetings",
            items: [
                { title: "Sales", date: "2022-05-12" },
                { title: "Finance", date: "2022-05-15" },
                { title: "Company", date: "2022-05-17" }
            ],
        },
        {
            title: "Conferences",
            items: [
                { title: "JavaScript Development", location: "Berlin", date: "2022-06-10" },
                { title: "React Ecosystems", location: "Hamburg", date: "2022-06-22" },
                { title: "Angular Development", location: "Frankfurt", date: "2022-06-27" }
            ],
        },
    ];

    return (
        <div className="Spa004">
            <h3>Spa004 - Display data from an array and a nested array in JSX</h3>
            <div className="container-4">
                <h2>Companies :</h2>
                {
                    companies.map(company => {
                        return (
                            <ul key={company.id}>
                                <li>{company.title}</li>
                            </ul>
                        )
                    })
                }
                <h2>Events :</h2>
                {
                    events.map((event, index) => {
                        return (
                            <ul>
                                <li>{event.title}</li>
                                <ul>
                                    {event.items.map(item => {
                                        return (
                                            <li>{item.title}</li>
                                        )
                                    })}
                                </ul>
                            </ul>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Spa004