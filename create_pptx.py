import json
import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return RGBColor(*tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4)))

def add_colored_background(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color

def create_pptx():
    with open('assets/products_content.json', 'r', encoding='utf-8') as f:
        products = json.load(f)

    prs = Presentation()
    # Use widescreen 16:9
    prs.slide_width = Inches(13.33)
    prs.slide_height = Inches(7.5)

    # --- Slide 1: Title ---
    title_slide_layout = prs.slide_layouts[6] # blank layout
    slide = prs.slides.add_slide(title_slide_layout)
    add_colored_background(slide, RGBColor(20, 30, 48)) # Dark blue bg

    # Title text box
    txBox = slide.shapes.add_textbox(Inches(1), Inches(2.5), Inches(11.33), Inches(2))
    tf = txBox.text_frame
    p = tf.paragraphs[0]
    p.text = "PT. Anugerah Bakti Prima"
    p.font.size = Pt(54)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.alignment = PP_ALIGN.CENTER

    # Subtitle text box
    txBox_sub = slide.shapes.add_textbox(Inches(1), Inches(4), Inches(11.33), Inches(1))
    tf_sub = txBox_sub.text_frame
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = "Marketplace SaaS Pertama di Indonesia\nSolusi OPEX untuk Efisiensi Operasional"
    p_sub.font.size = Pt(28)
    p_sub.font.color.rgb = RGBColor(200, 200, 200)
    p_sub.alignment = PP_ALIGN.CENTER

    # --- Slide 2: About Us ---
    bullet_slide_layout = prs.slide_layouts[1]
    slide = prs.slides.add_slide(bullet_slide_layout)
    title_shape = slide.shapes.title
    body_shape = slide.placeholders[1]

    title_shape.text = "Mengapa Memilih Kami?"
    title_shape.text_frame.paragraphs[0].font.color.rgb = RGBColor(30, 60, 114)
    title_shape.text_frame.paragraphs[0].font.bold = True
    
    tf = body_shape.text_frame
    tf.text = "PT. Anugerah Bakti Prima (ABP) adalah pelopor Marketplace SaaS di Indonesia."
    
    p = tf.add_paragraph()
    p.text = "Beralih dari CAPEX ke OPEX:"
    p.level = 0
    p.font.bold = True
    
    p = tf.add_paragraph()
    p.text = "Tanpa Modal Awal Besar: Tidak perlu investasi hardware atau server."
    p.level = 1
    
    p = tf.add_paragraph()
    p.text = "Langsung Pakai (Plug & Play): Implementasi cepat dan praktis."
    p.level = 1
    
    p = tf.add_paragraph()
    p.text = "Efisiensi Terukur: Biaya sejalan dengan pertumbuhan instansi/bisnis Anda."
    p.level = 1

    # --- Slides for each product (Custom Design) ---
    blank_layout = prs.slide_layouts[6]

    for key, prod in products.items():
        slide = prs.slides.add_slide(blank_layout)
        
        # Product Color
        prod_color = hex_to_rgb(prod['color'])

        # Top Banner accent
        shape = slide.shapes.add_shape(
            MSO_SHAPE.RECTANGLE, 
            0, 0, Inches(13.33), Inches(0.5)
        )
        shape.fill.solid()
        shape.fill.fore_color.rgb = prod_color
        shape.line.color.rgb = prod_color

        # Title
        title_box = slide.shapes.add_textbox(Inches(0.5), Inches(0.8), Inches(6), Inches(1))
        tf_title = title_box.text_frame
        p = tf_title.paragraphs[0]
        p.text = prod['name']
        p.font.size = Pt(44)
        p.font.bold = True
        p.font.color.rgb = prod_color

        # Tagline
        tag_box = slide.shapes.add_textbox(Inches(0.5), Inches(1.8), Inches(6), Inches(1))
        tf_tag = tag_box.text_frame
        tf_tag.word_wrap = True
        p_tag = tf_tag.paragraphs[0]
        p_tag.text = prod['tagline']
        p_tag.font.size = Pt(24)
        p_tag.font.italic = True
        p_tag.font.color.rgb = RGBColor(100, 100, 100)

        # Body Text
        body_box = slide.shapes.add_textbox(Inches(0.5), Inches(3), Inches(5.5), Inches(4))
        tf_body = body_box.text_frame
        tf_body.word_wrap = True
        
        if 'pages_text' in prod and len(prod['pages_text']) > 0:
            first_page = prod['pages_text'][0]
            lines = first_page.split('\n')
            added_lines = 0
            for line in lines:
                clean_line = line.strip()
                if clean_line and clean_line.upper() != prod['name'].upper() and clean_line != prod['tagline']:
                    p = tf_body.add_paragraph()
                    p.text = "• " + clean_line
                    p.font.size = Pt(18)
                    p.space_after = Pt(10)
                    added_lines += 1
                    if added_lines >= 4:
                        break

        # Try adding image if available
        if 'images' in prod and len(prod['images']) > 1:
            img_path = prod['images'][1] # usually -2.png or -02.png is a good screenshot
            if not os.path.exists(img_path):
                img_path = prod['images'][0]
            
            if os.path.exists(img_path):
                try:
                    # Place image on the right
                    slide.shapes.add_picture(img_path, Inches(6.5), Inches(1.2), width=Inches(6.3))
                except Exception as e:
                    print(f"Error adding image {img_path}: {e}")

    # --- Slide: Contact ---
    slide = prs.slides.add_slide(title_slide_layout) # Dark layout again
    add_colored_background(slide, RGBColor(20, 30, 48))

    txBox = slide.shapes.add_textbox(Inches(1), Inches(2), Inches(11.33), Inches(1.5))
    tf = txBox.text_frame
    p = tf.paragraphs[0]
    p.text = "Mari Bertransformasi!"
    p.font.size = Pt(54)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.alignment = PP_ALIGN.CENTER

    txBox_sub = slide.shapes.add_textbox(Inches(1), Inches(4), Inches(11.33), Inches(2))
    tf_sub = txBox_sub.text_frame
    
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = "Hubungi Tim ABP untuk menjadwalkan Demo & Konsultasi."
    p_sub.font.size = Pt(28)
    p_sub.font.color.rgb = RGBColor(200, 200, 200)
    p_sub.alignment = PP_ALIGN.CENTER
    
    p_sub2 = tf_sub.add_paragraph()
    p_sub2.text = "Website: https://abp.id"
    p_sub2.font.size = Pt(24)
    p_sub2.font.color.rgb = RGBColor(100, 180, 255)
    p_sub2.alignment = PP_ALIGN.CENTER

    prs.save('ABP_Company_Profile.pptx')
    print("Berhasil membuat ABP_Company_Profile.pptx dengan desain baru.")

if __name__ == "__main__":
    create_pptx()
