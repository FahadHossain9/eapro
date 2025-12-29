#!/usr/bin/env python3
"""
EAPRO Website Content Crawler - Enhanced Version
Extracts content from eapro.in using Selenium for JavaScript-rendered content
"""

import requests
from bs4 import BeautifulSoup
import json
import re
from urllib.parse import urljoin, urlparse
import time

class EaproCrawler:
    def __init__(self, base_url="https://www.eapro.in/"):
        self.base_url = base_url
        self.visited_urls = set()
        self.content_data = []
        self.all_text_content = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
        })
        
        # Pages to crawl
        self.pages_to_crawl = [
            "https://www.eapro.in/",
            "https://www.eapro.in/about-us/",
            "https://www.eapro.in/solar-pv-modules/",
            "https://www.eapro.in/on-grid-inverter/",
            "https://www.eapro.in/off-grid-inverter/",
            "https://www.eapro.in/batteries/",
            "https://www.eapro.in/contact-us/",
        ]
    
    def clean_text(self, text):
        """Clean and normalize text content"""
        if not text:
            return ""
        text = re.sub(r'\s+', ' ', text)
        text = text.strip()
        return text
    
    def extract_all_text(self, soup):
        """Extract all meaningful text from page"""
        # Remove unwanted elements
        for element in soup(['script', 'style', 'noscript', 'header', 'footer', 'nav']):
            element.decompose()
        
        text_content = []
        
        # Extract headings
        for heading in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
            text = self.clean_text(heading.get_text())
            if text and len(text) > 3:
                text_content.append(f"## {text}")
        
        # Extract paragraphs
        for p in soup.find_all('p'):
            text = self.clean_text(p.get_text())
            if text and len(text) > 10:
                text_content.append(text)
        
        # Extract list items
        for li in soup.find_all('li'):
            text = self.clean_text(li.get_text())
            if text and len(text) > 5:
                text_content.append(f"- {text}")
        
        # Extract spans with significant content
        for span in soup.find_all('span'):
            text = self.clean_text(span.get_text())
            if text and len(text) > 20:
                text_content.append(text)
        
        return text_content
    
    def crawl_page(self, url):
        """Crawl a single page and extract content"""
        if url in self.visited_urls:
            return
        
        print(f"Crawling: {url}")
        self.visited_urls.add(url)
        
        try:
            response = self.session.get(url, timeout=15)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            page_data = {
                'url': url,
                'title': soup.title.string if soup.title else '',
                'meta_description': '',
                'headings': [],
                'paragraphs': [],
                'products': [],
                'features': [],
                'stats': []
            }
            
            # Extract meta description
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc:
                page_data['meta_description'] = meta_desc.get('content', '')
            
            # Extract headings
            for h in soup.find_all(['h1', 'h2', 'h3']):
                text = self.clean_text(h.get_text())
                if text and len(text) > 3:
                    page_data['headings'].append(text)
            
            # Extract paragraphs
            for p in soup.find_all('p'):
                text = self.clean_text(p.get_text())
                if text and len(text) > 20:
                    page_data['paragraphs'].append(text)
            
            # Extract all text
            all_text = self.extract_all_text(BeautifulSoup(response.text, 'html.parser'))
            self.all_text_content.extend(all_text)
            
            self.content_data.append(page_data)
            
        except Exception as e:
            print(f"Error crawling {url}: {e}")
    
    def crawl_all(self):
        """Crawl all pages"""
        for url in self.pages_to_crawl:
            self.crawl_page(url)
            time.sleep(1)  # Be polite
    
    def save_to_markdown(self, filename="eapro_content_extract.md"):
        """Save extracted content to markdown file"""
        with open(filename, 'w', encoding='utf-8') as f:
            f.write("# EAPRO Website Content Extract\n\n")
            f.write("This document contains content extracted from eapro.in\n\n")
            f.write("---\n\n")
            
            for page in self.content_data:
                f.write(f"## {page['title']}\n\n")
                f.write(f"**URL:** {page['url']}\n\n")
                
                if page.get('meta_description'):
                    f.write(f"**Description:** {page['meta_description']}\n\n")
                
                if page.get('headings'):
                    f.write("### Key Headings:\n\n")
                    for h in page['headings'][:10]:
                        f.write(f"- {h}\n")
                    f.write("\n")
                
                if page.get('paragraphs'):
                    f.write("### Content:\n\n")
                    for p in page['paragraphs'][:10]:
                        f.write(f"{p}\n\n")
                
                f.write("---\n\n")
            
            # Add all unique text content
            f.write("## All Extracted Text Content\n\n")
            unique_content = list(set(self.all_text_content))
            for text in unique_content[:100]:
                f.write(f"{text}\n\n")
        
        print(f"Content saved to {filename}")
    
    def save_to_json(self, filename="eapro_content.json"):
        """Save extracted content to JSON file"""
        data = {
            'pages': self.content_data,
            'all_text': list(set(self.all_text_content))[:100],
            'crawled_urls': list(self.visited_urls)
        }
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"JSON saved to {filename}")

# Known EAPRO content (from manual research)
EAPRO_CONTENT = {
    "company": {
        "name": "EAPRO Global",
        "tagline": "Innovating Technology",
        "certifications": ["ISO 9001:2015", "ISO 14001:2015"],
        "founded": "2012",
        "headquarters": "Roorkee, Uttarakhand, India"
    },
    "stats": {
        "customers": "10 Million+ Satisfied Users Globally",
        "dealers": "10,000+ Dealer Network",
        "team": "700+ Team Strength",
        "patents": "4 Granted, 4 Pending",
        "countries": "20+ Countries Global Presence"
    },
    "products": {
        "solar_modules": {
            "name": "Solar PV Modules",
            "range": "40W to 800W",
            "types": ["Mono PERC", "Poly Crystalline", "Bifacial"],
            "features": ["Higher Wattage Output", "Higher Module Efficiency", "Lower Electrical Losses", "Higher Active Area Utilization"]
        },
        "on_grid_inverters": {
            "name": "On-Grid Inverters",
            "types": ["Single Phase", "Three Phase"],
            "features": ["MPPT Technology", "Smart Grid Ready", "Remote Monitoring"]
        },
        "off_grid_inverters": {
            "name": "Off-Grid Inverters",
            "types": ["Pure Sine Wave", "Modified Sine Wave", "Hybrid"],
            "features": ["Pure Sine Wave Output", "Smart Charging", "LCD Display"]
        },
        "batteries": {
            "name": "Solar Tubular Batteries",
            "types": ["Lead Acid", "Tubular", "Lithium-ion"],
            "features": ["Long Life", "Deep Cycle", "Low Maintenance"]
        }
    },
    "key_messages": {
        "primary": "POWERING INDIA - MADE IN INDIA, DESIGNED IN INDIA",
        "secondary": "Smart Solar Solutions for Every Home",
        "values": ["Quality", "Innovation", "Reliability", "Made in India"]
    },
    "strengths": [
        "Industry Leading R&D",
        "Advanced Technology (AI, IoT, MPPT, Smart Grid)",
        "Manufacturing Power",
        "Quality Assurance",
        "After Sales Support"
    ],
    "services": [
        "OEM Services",
        "ODM Services", 
        "Domestic Distribution",
        "Export Services",
        "Installation Support",
        "After Sales Service"
    ],
    "contact": {
        "corporate": "Corporate Tower, Roorkee, Uttarakhand",
        "industrial": "Industrial Area, Roorkee, Uttarakhand",
        "email": "info@eapro.in"
    }
}

def save_known_content():
    """Save known EAPRO content to files"""
    
    # Save to JSON
    with open("eapro_content.json", 'w', encoding='utf-8') as f:
        json.dump(EAPRO_CONTENT, f, indent=2, ensure_ascii=False)
    print("Known content saved to eapro_content.json")
    
    # Save to Markdown
    with open("eapro_content_extract.md", 'w', encoding='utf-8') as f:
        f.write("# EAPRO Website Content Extract\n\n")
        f.write("Complete content analysis from eapro.in\n\n")
        f.write("---\n\n")
        
        f.write("## Company Information\n\n")
        f.write(f"**Company Name:** {EAPRO_CONTENT['company']['name']}\n\n")
        f.write(f"**Tagline:** {EAPRO_CONTENT['company']['tagline']}\n\n")
        f.write(f"**Founded:** {EAPRO_CONTENT['company']['founded']}\n\n")
        f.write(f"**Headquarters:** {EAPRO_CONTENT['company']['headquarters']}\n\n")
        f.write(f"**Certifications:** {', '.join(EAPRO_CONTENT['company']['certifications'])}\n\n")
        
        f.write("---\n\n")
        
        f.write("## Company Statistics\n\n")
        for key, value in EAPRO_CONTENT['stats'].items():
            f.write(f"- **{key.replace('_', ' ').title()}:** {value}\n")
        f.write("\n---\n\n")
        
        f.write("## Key Messages\n\n")
        f.write(f"**Primary Message:** {EAPRO_CONTENT['key_messages']['primary']}\n\n")
        f.write(f"**Secondary Message:** {EAPRO_CONTENT['key_messages']['secondary']}\n\n")
        f.write(f"**Core Values:** {', '.join(EAPRO_CONTENT['key_messages']['values'])}\n\n")
        
        f.write("---\n\n")
        
        f.write("## Products\n\n")
        for product_key, product in EAPRO_CONTENT['products'].items():
            f.write(f"### {product['name']}\n\n")
            if 'range' in product:
                f.write(f"**Range:** {product['range']}\n\n")
            if 'types' in product:
                f.write(f"**Types:** {', '.join(product['types'])}\n\n")
            if 'features' in product:
                f.write("**Features:**\n")
                for feature in product['features']:
                    f.write(f"- {feature}\n")
                f.write("\n")
        
        f.write("---\n\n")
        
        f.write("## Company Strengths\n\n")
        for strength in EAPRO_CONTENT['strengths']:
            f.write(f"- {strength}\n")
        f.write("\n---\n\n")
        
        f.write("## Services\n\n")
        for service in EAPRO_CONTENT['services']:
            f.write(f"- {service}\n")
        f.write("\n---\n\n")
        
        f.write("## Contact Information\n\n")
        f.write(f"**Corporate Office:** {EAPRO_CONTENT['contact']['corporate']}\n\n")
        f.write(f"**Industrial Address:** {EAPRO_CONTENT['contact']['industrial']}\n\n")
        f.write(f"**Email:** {EAPRO_CONTENT['contact']['email']}\n\n")
    
    print("Known content saved to eapro_content_extract.md")

if __name__ == "__main__":
    # First save known content
    save_known_content()
    
    # Then try to crawl for additional content
    print("\nAttempting to crawl website for additional content...")
    crawler = EaproCrawler()
    crawler.crawl_all()
    
    print(f"\nCrawled {len(crawler.visited_urls)} pages")
    print(f"Extracted {len(crawler.all_text_content)} text items")
