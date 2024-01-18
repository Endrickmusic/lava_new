const fragmentShader = `

uniform float uTime;

void main() {

    // Set a base color
    vec3 baseColor = vec3(1.0, 1.0, 0.8);
  
    // Use the sine function to create a smooth color transition over time
    float timeFactor = abs(sin(uTime*0.2)) + 0.4;
  
    // Use gl_FragCoord to incorporate position into the color calculation
    vec3 positionFactor = normalize(gl_FragCoord.xyz) * 0.5 + 0.5;
  
    // Combine the factors to create the final color
    vec3 color = baseColor * timeFactor * positionFactor;
  
    // Output the final color
    gl_FragColor = vec4(color, 1.0);
}

`

export default fragmentShader