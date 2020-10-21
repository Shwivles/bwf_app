import React from 'react';

//bootstrap
import Form from 'react-bootstrap/Form';

function ExerciseSelect({ exercise }) {

    const mappedExerciseSelection = exercise.name.map((name) => {
        return (
            <option>{name}</option>
        );
    });

    return (
        <Form as="div">
            <Form.Group controlId={`${exercise.id}-id`}>
                <Form.Control as="select" custom>
                    {mappedExerciseSelection}
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default ExerciseSelect;