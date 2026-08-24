import math
from PIL import Image, ImageDraw

def generate_frames(num_frames=100, width=1920, height=1080):
    for i in range(num_frames):
        # Create a new image with a dark background
        img = Image.new('RGB', (width, height), color='#121514')
        draw = ImageDraw.Draw(img)
        
        # Calculate rotation based on frame index
        progress = i / num_frames
        angle = progress * math.pi * 2
        
        center_x, center_y = width // 2, height // 2
        
        # Draw some abstract "watch" shapes that animate
        # Outer casing (Basalt)
        outer_radius = 400
        draw.ellipse([center_x - outer_radius, center_y - outer_radius, 
                      center_x + outer_radius, center_y + outer_radius], 
                     outline='#3F4A3C', width=10)
        
        # Inner mechanics (Bronze)
        inner_radius = 300 + math.sin(progress * math.pi * 4) * 20
        draw.ellipse([center_x - inner_radius, center_y - inner_radius, 
                      center_x + inner_radius, center_y + inner_radius], 
                     outline='#A38350', width=5)
        
        # A rotating tourbillon-like element
        t_radius = 150
        t_x = center_x + math.cos(angle) * 100
        t_y = center_y + math.sin(angle) * 100
        
        draw.ellipse([t_x - t_radius, t_y - t_radius, 
                      t_x + t_radius, t_y + t_radius], 
                     outline='#B85D3B', width=3)
                     
        # Draw some crosshairs to make it look technical
        draw.line([center_x - 500, center_y, center_x + 500, center_y], fill='#A6A098', width=1)
        draw.line([center_x, center_y - 500, center_x, center_y + 500], fill='#A6A098', width=1)
        
        # Add frame number text
        draw.text((100, 100), f"FRAME {i:04d}", fill='#EAE4DC')
        
        # Save as WebP
        filename = f"public/sequence/frame_{i:04d}.webp"
        img.save(filename, 'WEBP')
        
        if i % 25 == 0:
            print(f"Generated {i} frames...")

if __name__ == '__main__':
    print("Generating frames...")
    generate_frames()
    print("Done generating 100 frames.")
