describe('API Tests',function(){

//1. GET-ListUsers
    it('GET-ListUsers',function(){
    // 'request' should be used instead of 'visit', 'GET' is a method, 'LIST USERS'(Request)-copy link address from reqres.in site
    cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
    expect(response.duration).to.be.lessThan(1000)
    expect(response.status).equal(200)
    expect(response.body.data[1].last_name).equal('Ferguson')
    })
        })

//2.POST-Create User
    it('POST-Create User',function(){
    // CV json content from Request in reqres.in
    var user={
    "name": "Preethi",
    "job": "Artist"
    }
    // 'request' should be used instead of 'visit', 'POST' is a method, 'CREATE'(Request)-copy link address from reqres.in site, add 'user'
    cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
    expect(response.duration).to.be.lessThan(1000)
    expect(response.status).equal(201)
    expect(response.body.name).equal(user.name)
    expect(response.body.job).equal(user.job)

     })
        })

//3.PUT-Update User
    it('PUT-Update User',function(){
        // CV json content from Request in reqres.in
        var user={
            "name": "Rose",
            "job": "Boss"
        }
        // 'request' should be used instead of 'visit', 'PUT' is a method, 'UPDATE'(Request)-copy link address from reqres.in site, add 'user'
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
        expect(response.duration).to.be.lessThan(2000)
        expect(response.status).equal(200)
        expect(response.body.name).equal(user.name)
        expect(response.body.job).equal(user.job)
    
         })
            })

//4.DELETE-Delete User
it('DELETE-Delete User',function(){
    // 'request' should be used instead of 'visit', 'DELETE' is a method, 'DELETE'(Request)-copy link address from reqres.in site
    cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
    expect(response.duration).to.be.lessThan(2000)
    expect(response.status).equal(204)

     })
        })
            })  
