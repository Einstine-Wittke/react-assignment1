import React, { Component } from 'react'

export class ClassCompo extends Component {
    render() {
        return (
            <div>
                <div className='container2'>
                    This is created using Class Component
                    <p className="ext">This is done using external CSS</p>
                    <p style={{ color: "blue", fontWeight: 350, textAlign: 'center', fontSize: '18px' }}>
                        This is done using inline CSS</p>

                </div>
            </div>
        )
    }
}

export default ClassCompo