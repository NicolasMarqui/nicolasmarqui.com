export const vertexShader = `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

export const fragmentShader = `
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
  vec4 color = texture2D(u_texture, v_uv);
  gl_FragColor = color;
}
`;
