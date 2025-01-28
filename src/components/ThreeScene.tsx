import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

const Three: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let composer: EffectComposer;
    let controls: OrbitControls;
    let sphere: THREE.Mesh;

    const init = () => {
      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 3);

      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 1); // Background color
      mountRef.current?.appendChild(renderer.domElement);

      // Create sphere
      const geometry = new THREE.SphereGeometry(1.5, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Add light
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      // Add OrbitControls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      // Postprocessing
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      // Handle window resize
      window.addEventListener('resize', onWindowResize);

      animate();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      controls.update();
      composer.render();
    };

    init();

    // Cleanup on component unmount
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default Three;
