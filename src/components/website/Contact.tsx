import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Tem alguma questão?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div className="mb-3">
                                <label className="form-label">Nome Completo</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith"/>
</div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div className="mb-3">
                                    <label className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Enviar</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
