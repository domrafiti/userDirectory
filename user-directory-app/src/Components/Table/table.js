<form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={(event) => props.handleNameSearch(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Cell Phone</th>
          </tr>
        </thead>
        {empArray.map((each, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <img src={each.picture.thumbnail} alt={"headshot of employee"} />
                </td>
                <td>{each.name.first}</td>
                <td>{each.name.last}</td>
                <td>{each.email}</td>
                <td>{each.cell}</td>
              </tr>
            </tbody>
          );
        })}
      </table>