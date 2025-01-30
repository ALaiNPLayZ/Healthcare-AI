import sys
import json
import tensorflow as tf
import numpy as np
from tensorflow import keras

# Load the model (you'll need to train this separately)
model = keras.models.load_model('model.h5')

def predict_health_status(data):
    # Process input data
    features = np.array([
        data['heart_rate'],
        data['blood_pressure'],
        data['temperature'],
        data['activity_level']
    ]).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(features)
    
    return {
        'risk_level': float(prediction[0]),
        'recommendations': generate_recommendations(prediction[0])
    }

def generate_recommendations(risk_level):
    recommendations = []
    if risk_level > 0.7:
        recommendations.append("High risk detected. Please consult a healthcare provider.")
    elif risk_level > 0.4:
        recommendations.append("Moderate risk. Consider lifestyle changes.")
    else:
        recommendations.append("Low risk. Maintain current healthy habits.")
    return recommendations

if __name__ == "__main__":
    # Read input from Node.js
    input_data = json.loads(sys.argv[1])
    
    # Generate prediction
    result = predict_health_status(input_data)
    
    # Return result to Node.js
    print(json.dumps(result))