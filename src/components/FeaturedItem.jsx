import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function FeaturedItem(props) {
    const [showNutrition, setShowNutrition] = useState(false);

    return <Card>
        <img src={props.img} alt={props.name}></img>
        <h3><strong>{props.name}</strong></h3>
        <h4><strong>${props.price} per unit</strong></h4>
        <p>{props.description}</p> 
        {showNutrition && <p>Nutrition Facts</p>}
        {showNutrition &&
        <Table>
            <thead> 
                <tr>
                    <td>Calories</td>
                    <td>Fat</td>
                    <td>Carbohydrates</td>
                    <td>Protein</td>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>{props.nutrition.calories ? props.nutrition.calories : 0}</td>
                    <td>{props.nutrition.fat ? props.nutrition.fat : 0}</td>
                    <td>{props.nutrition.carbohydrates ? props.nutrition.carbohydrates : 0}</td>
                    <td>{props.nutrition.protein ? props.nutrition.protein : 0}</td>
                </tr>
            </tbody>
        </Table>
        } 
        <Button onClick={() => setShowNutrition(!showNutrition)}>{showNutrition ? "Hide Nutrition" : "Show Nutrition"}</Button>
    </Card>
}