describe('Testes de API - Restful Booker', () => {
  let bookingId; 
  const firstname = "Jim";
  const username = "admin";
  const password = "password123"; 

  it('Deve criar um booking via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: {
        "firstname": firstname,
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2018-01-01",
          "checkout": "2019-01-01"
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      bookingId = response.body.bookingid;
    });
  });

  it('Deve buscar booking por firstname', () => {
    cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking?firstname=${firstname}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.some(b => b.bookingid === bookingId)).to.be.true;
    });
  });

  it('Deve deletar o booking', () => {
    cy.request({
      method: 'DELETE',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      auth: {
        user: username,
        pass: password
      }
    }).then((response) => {
      expect(response.status).to.eq(201); 
    });

    cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
