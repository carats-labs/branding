// BRAND GUIDELINES: Derived directly from the Primary "Bright Aurora" palette
var palettes = [
    {
        name: "1. Primary (Bright Aurora)",
        tokens: {
            '--color-stroke-all': '#0A192F', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#0EA5E9',   // Mid background
            '--color-facet-12': '#4F46E5',  // Shadow
            '--color-facet-13': '#7E22CE',  // Bottom Accent
            '--color-facet-3': '#E6FFF2', '--color-facet-5': '#A3FFD6', '--color-facet-7': '#4BFFB3',
            '--color-facet-9': '#00D186', '--color-facet-11': '#B2FFD9',
            '--color-facet-2': '#2DD4BF', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#14B8A6',
            '--color-facet-8': '#0D9488', '--color-facet-10': '#0F766E', '--color-facet-14': '#4BFFB3',
            '--color-facet-15': '#14B8A6'
        }
    },
    {
        name: "2. Dark Mode Primary",
        bg: "bg-slate-900 border-slate-700",
        text: "text-white",
        tokens: {
            '--color-stroke-all': '#FFFFFF', '--color-fill-center': '#0A192F',
            '--color-facet-1': '#0EA5E9', '--color-facet-12': '#4F46E5', '--color-facet-13': '#7E22CE',
            '--color-facet-3': '#E6FFF2', '--color-facet-5': '#A3FFD6', '--color-facet-7': '#4BFFB3',
            '--color-facet-9': '#00D186', '--color-facet-11': '#B2FFD9',
            '--color-facet-2': '#2DD4BF', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#14B8A6',
            '--color-facet-8': '#0D9488', '--color-facet-10': '#0F766E', '--color-facet-14': '#4BFFB3',
            '--color-facet-15': '#14B8A6'
        }
    },
    {
        name: "3. Grayscale (B&W Print)",
        tokens: {
            '--color-stroke-all': '#111827', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#9CA3AF', '--color-facet-12': '#4B5563', '--color-facet-13': '#1F2937',
            '--color-facet-3': '#F9FAFB', '--color-facet-5': '#F3F4F6', '--color-facet-7': '#E5E7EB',
            '--color-facet-9': '#D1D5DB', '--color-facet-11': '#E5E7EB',
            '--color-facet-2': '#D1D5DB', '--color-facet-4': '#D1D5DB', '--color-facet-6': '#9CA3AF',
            '--color-facet-8': '#6B7280', '--color-facet-10': '#4B5563', '--color-facet-14': '#E5E7EB',
            '--color-facet-15': '#9CA3AF'
        }
    },
    {
        name: "4. Brand Monotone (Teal)",
        tokens: {
            '--color-stroke-all': '#022C22', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#059669', '--color-facet-12': '#064E3B', '--color-facet-13': '#022C22',
            '--color-facet-3': '#D1FAE5', '--color-facet-5': '#A7F3D0', '--color-facet-7': '#6EE7B7',
            '--color-facet-9': '#34D399', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#10B981', '--color-facet-6': '#059669',
            '--color-facet-8': '#047857', '--color-facet-10': '#064E3B', '--color-facet-14': '#6EE7B7',
            '--color-facet-15': '#10B981'
        }
    },
    {
        name: "5. Solid Silhouette (Stamp)",
        tokens: {
            '--color-stroke-all': '#0A192F', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#0A192F', '--color-facet-12': '#0A192F', '--color-facet-13': '#0A192F',
            '--color-facet-3': '#0A192F', '--color-facet-5': '#0A192F', '--color-facet-7': '#0A192F',
            '--color-facet-9': '#0A192F', '--color-facet-11': '#0A192F',
            '--color-facet-2': '#0A192F', '--color-facet-4': '#0A192F', '--color-facet-6': '#0A192F',
            '--color-facet-8': '#0A192F', '--color-facet-10': '#0A192F', '--color-facet-14': '#0A192F',
            '--color-facet-15': '#0A192F'
        }
    },
    {
        name: "6. Neon Blueprint",
        bg: "bg-slate-900 border-slate-700",
        text: "text-white",
        tokens: {
            '--color-stroke-all': '#4BFFB3', '--color-fill-center': '#0F172A',
            '--color-facet-1': '#0F172A', '--color-facet-12': '#0F172A', '--color-facet-13': '#0F172A',
            '--color-facet-3': '#0F172A', '--color-facet-5': '#0F172A', '--color-facet-7': '#0F172A',
            '--color-facet-9': '#0F172A', '--color-facet-11': '#0F172A',
            '--color-facet-2': '#0F172A', '--color-facet-4': '#0F172A', '--color-facet-6': '#0F172A',
            '--color-facet-8': '#0F172A', '--color-facet-10': '#0F172A', '--color-facet-14': '#0F172A',
            '--color-facet-15': '#0F172A'
        }
    },
    {
        name: "7. The Original",
        tokens: {
            '--color-stroke-all': '#0D3361', '--color-fill-center': '#FBFBFB',
            '--color-facet-1': '#50AEED', '--color-facet-2': '#61CEF0', '--color-facet-3': '#64E7EA',
            '--color-facet-4': '#64D2F5', '--color-facet-5': '#92E8F0', '--color-facet-6': '#5BCAF8',
            '--color-facet-7': '#86EBF5', '--color-facet-8': '#65D8E6', '--color-facet-9': '#64E0E6',
            '--color-facet-10': '#50E0DB', '--color-facet-11': '#6DF0E0', '--color-facet-12': '#0F84DF',
            '--color-facet-13': '#8F5BE9', '--color-facet-14': '#5EEEDE', '--color-facet-15': '#59E2DF'
        }
    },
    {
        name: "8. Northern Lights (Base)",
        tokens: {
            '--color-stroke-all': '#0A192F', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#0EA5E9', '--color-facet-12': '#4F46E5', '--color-facet-13': '#7E22CE',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#10B981', '--color-facet-11': '#6EE7B7',
            '--color-facet-2': '#2DD4BF', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#14B8A6',
            '--color-facet-8': '#0D9488', '--color-facet-10': '#0F766E', '--color-facet-14': '#34D399',
            '--color-facet-15': '#14B8A6'
        }
    },
    {
        name: "9. Northern Lights: Aurora Glow",
        tokens: {
            '--color-stroke-all': '#0F172A', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#6366F1', '--color-facet-12': '#4C1D95', '--color-facet-13': '#020617',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#38BDF8',
            '--color-facet-8': '#3B82F6', '--color-facet-10': '#4F46E5', '--color-facet-14': '#10B981',
            '--color-facet-15': '#0EA5E9'
        }
    },
    {
        name: "10. Northern Lights: Polar Night",
        tokens: {
            '--color-stroke-all': '#022C22', '--color-fill-center': '#F0FDFA',
            '--color-facet-1': '#0F766E', '--color-facet-12': '#042F2E', '--color-facet-13': '#172554',
            '--color-facet-3': '#99F6E4', '--color-facet-5': '#5EEAD4', '--color-facet-7': '#2DD4BF',
            '--color-facet-9': '#5EEAD4', '--color-facet-11': '#99F6E4',
            '--color-facet-2': '#14B8A6', '--color-facet-4': '#0D9488', '--color-facet-6': '#0891B2',
            '--color-facet-8': '#0369A1', '--color-facet-10': '#1D4ED8', '--color-facet-14': '#14B8A6',
            '--color-facet-15': '#0891B2'
        }
    },
    {
        name: "11. Northern Lights: Cosmic Horizon",
        tokens: {
            '--color-stroke-all': '#2E1065', '--color-fill-center': '#FAF5FF',
            '--color-facet-1': '#9333EA', '--color-facet-12': '#4C1D95', '--color-facet-13': '#831843',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#2DD4BF', '--color-facet-4': '#0EA5E9', '--color-facet-6': '#8B5CF6',
            '--color-facet-8': '#C026D3', '--color-facet-10': '#D946EF', '--color-facet-14': '#38BDF8',
            '--color-facet-15': '#8B5CF6'
        }
    },
    {
        name: "12. Deep Ocean",
        tokens: {
            '--color-stroke-all': '#042F2E', '--color-fill-center': '#F0FDFA',
            '--color-facet-1': '#0284C7', '--color-facet-12': '#1D4ED8', '--color-facet-13': '#1E3A8A',
            '--color-facet-3': '#A5F3FC', '--color-facet-5': '#67E8F9', '--color-facet-7': '#22D3EE',
            '--color-facet-9': '#06B6D4', '--color-facet-11': '#67E8F9',
            '--color-facet-2': '#0891B2', '--color-facet-4': '#06B6D4', '--color-facet-6': '#0891B2',
            '--color-facet-8': '#0E7490', '--color-facet-10': '#155E75', '--color-facet-14': '#22D3EE',
            '--color-facet-15': '#06B6D4'
        }
    },
    {
        name: "13. Emerald Forest",
        tokens: {
            '--color-stroke-all': '#064E3B', '--color-fill-center': '#ECFDF5',
            '--color-facet-1': '#059669', '--color-facet-12': '#047857', '--color-facet-13': '#064E3B',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#34D399', '--color-facet-6': '#10B981',
            '--color-facet-8': '#059669', '--color-facet-10': '#047857', '--color-facet-14': '#34D399',
            '--color-facet-15': '#10B981'
        }
    },
    {
        name: "14. Amethyst & Sapphire",
        tokens: {
            '--color-stroke-all': '#1E1B4B', '--color-fill-center': '#F8FAFC',
            '--color-facet-1': '#6366F1', '--color-facet-12': '#4338CA', '--color-facet-13': '#312E81',
            '--color-facet-3': '#DDD6FE', '--color-facet-5': '#C4B5FD', '--color-facet-7': '#A78BFA',
            '--color-facet-9': '#C4B5FD', '--color-facet-11': '#DDD6FE',
            '--color-facet-2': '#60A5FA', '--color-facet-4': '#A78BFA', '--color-facet-6': '#818CF8',
            '--color-facet-8': '#6366F1', '--color-facet-10': '#4F46E5', '--color-facet-14': '#A78BFA',
            '--color-facet-15': '#818CF8'
        }
    },
    {
        name: "15. Amethyst, Sapphire & Emerald",
        tokens: {
            '--color-stroke-all': '#1E1B4B', '--color-fill-center': '#F8FAFC',
            '--color-facet-1': '#3B82F6', '--color-facet-12': '#6D28D9', '--color-facet-13': '#4C1D95',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#38BDF8',
            '--color-facet-8': '#60A5FA', '--color-facet-10': '#8B5CF6', '--color-facet-14': '#10B981',
            '--color-facet-15': '#0EA5E9'
        }
    },
    {
        name: "16. Amethyst & Emerald",
        tokens: {
            '--color-stroke-all': '#1E1B4B', '--color-fill-center': '#F8FAFC',
            '--color-facet-1': '#8B5CF6', '--color-facet-12': '#6D28D9', '--color-facet-13': '#4C1D95',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#A78BFA', '--color-facet-6': '#8B5CF6',
            '--color-facet-8': '#A78BFA', '--color-facet-10': '#7C3AED', '--color-facet-14': '#10B981',
            '--color-facet-15': '#8B5CF6'
        }
    },
    {
        name: "17. Sapphire & Emerald",
        tokens: {
            '--color-stroke-all': '#042F2E', '--color-fill-center': '#F0FDFA',
            '--color-facet-1': '#0284C7', '--color-facet-12': '#1D4ED8', '--color-facet-13': '#1E3A8A',
            '--color-facet-3': '#A7F3D0', '--color-facet-5': '#6EE7B7', '--color-facet-7': '#34D399',
            '--color-facet-9': '#6EE7B7', '--color-facet-11': '#A7F3D0',
            '--color-facet-2': '#10B981', '--color-facet-4': '#2DD4BF', '--color-facet-6': '#0891B2',
            '--color-facet-8': '#0369A1', '--color-facet-10': '#1D4ED8', '--color-facet-14': '#10B981',
            '--color-facet-15': '#0891B2'
        }
    },
    {
        name: "18. Sunset Glow",
        tokens: {
            '--color-stroke-all': '#8B4513', '--color-fill-center': '#FFFACD',
            '--color-facet-1': '#FF4500', '--color-facet-12': '#DC143C', '--color-facet-13': '#B22222',
            '--color-facet-3': '#FFD700', '--color-facet-5': '#FFA500', '--color-facet-7': '#FF6347',
            '--color-facet-9': '#FFA500', '--color-facet-11': '#FFD700',
            '--color-facet-2': '#FF6347', '--color-facet-4': '#FF4500', '--color-facet-6': '#DC143C',
            '--color-facet-8': '#B22222', '--color-facet-10': '#8B0000', '--color-facet-14': '#FF6347',
            '--color-facet-15': '#FF4500'
        }
    },
    {
        name: "19. Arctic Chill",
        bg: "bg-slate-900 border-slate-700",
        text: "text-white",
        tokens: {
            '--color-stroke-all': '#4682B4', '--color-fill-center': '#F0F8FF',
            '--color-facet-1': '#87CEEB', '--color-facet-12': '#4169E1', '--color-facet-13': '#000080',
            '--color-facet-3': '#E0FFFF', '--color-facet-5': '#B0E0E6', '--color-facet-7': '#5F9EA0',
            '--color-facet-9': '#B0E0E6', '--color-facet-11': '#E0FFFF',
            '--color-facet-2': '#48D1CC', '--color-facet-4': '#20B2AA', '--color-facet-6': '#00CED1',
            '--color-facet-8': '#008B8B', '--color-facet-10': '#006994', '--color-facet-14': '#48D1CC',
            '--color-facet-15': '#00CED1'
        }
    },
    {
        name: "20. Tropical Paradise",
        tokens: {
            '--color-stroke-all': '#228B22', '--color-fill-center': '#FFFFE0',
            '--color-facet-1': '#32CD32', '--color-facet-12': '#006400', '--color-facet-13': '#004400',
            '--color-facet-3': '#ADFF2F', '--color-facet-5': '#7FFF00', '--color-facet-7': '#00FF7F',
            '--color-facet-9': '#7FFF00', '--color-facet-11': '#ADFF2F',
            '--color-facet-2': '#00FA9A', '--color-facet-4': '#3CB371', '--color-facet-6': '#2E8B57',
            '--color-facet-8': '#008000', '--color-facet-10': '#006400', '--color-facet-14': '#00FA9A',
            '--color-facet-15': '#2E8B57'
        }
    },
    {
        name: "21. Mystic Galaxy",
        tokens: {
            '--color-stroke-all': '#1A1A2E', '--color-fill-center': '#E6E6FA',
            '--color-facet-1': '#4B0082', '--color-facet-12': '#000080', '--color-facet-13': '#2F1B14',
            '--color-facet-3': '#9370DB', '--color-facet-5': '#8A2BE2', '--color-facet-7': '#DA70D6',
            '--color-facet-9': '#8A2BE2', '--color-facet-11': '#9370DB',
            '--color-facet-2': '#9932CC', '--color-facet-4': '#6A5ACD', '--color-facet-6': '#4169E1',
            '--color-facet-8': '#0000CD', '--color-facet-10': '#191970', '--color-facet-14': '#9932CC',
            '--color-facet-15': '#4B0082'
        }
    },
    {
        name: "22. Ruby Passion",
        tokens: {
            '--color-stroke-all': '#B91C1C', '--color-fill-center': '#FEF2F2',
            '--color-facet-1': '#DC2626', '--color-facet-12': '#991B1B', '--color-facet-13': '#7F1D1D',
            '--color-facet-3': '#FECACA', '--color-facet-5': '#FCA5A5', '--color-facet-7': '#F87171',
            '--color-facet-9': '#FCA5A5', '--color-facet-11': '#FECACA',
            '--color-facet-2': '#EF4444', '--color-facet-4': '#F87171', '--color-facet-6': '#DC2626',
            '--color-facet-8': '#B91C1C', '--color-facet-10': '#991B1B', '--color-facet-14': '#EF4444',
            '--color-facet-15': '#DC2626'
        }
    },
    {
        name: "23. Sapphire Dream",
        tokens: {
            '--color-stroke-all': '#1E40AF', '--color-fill-center': '#EFF6FF',
            '--color-facet-1': '#2563EB', '--color-facet-12': '#1D4ED8', '--color-facet-13': '#1E3A8A',
            '--color-facet-3': '#BFDBFE', '--color-facet-5': '#93C5FD', '--color-facet-7': '#60A5FA',
            '--color-facet-9': '#93C5FD', '--color-facet-11': '#BFDBFE',
            '--color-facet-2': '#3B82F6', '--color-facet-4': '#60A5FA', '--color-facet-6': '#2563EB',
            '--color-facet-8': '#1D4ED8', '--color-facet-10': '#1E40AF', '--color-facet-14': '#3B82F6',
            '--color-facet-15': '#2563EB'
        }
    },
    {
        name: "24. Emerald Serenity",
        tokens: {
            '--color-stroke-all': '#14532D', '--color-fill-center': '#F0FDF4',
            '--color-facet-1': '#16A34A', '--color-facet-12': '#15803D', '--color-facet-13': '#166534',
            '--color-facet-3': '#BBF7D0', '--color-facet-5': '#86EFAC', '--color-facet-7': '#4ADE80',
            '--color-facet-9': '#86EFAC', '--color-facet-11': '#BBF7D0',
            '--color-facet-2': '#22C55E', '--color-facet-4': '#4ADE80', '--color-facet-6': '#16A34A',
            '--color-facet-8': '#15803D', '--color-facet-10': '#166534', '--color-facet-14': '#22C55E',
            '--color-facet-15': '#16A34A'
        }
    },
    {
        name: "25. Ember Dance by Grok",
        tokens: {
            '--color-stroke-all': '#7F1D1D', '--color-fill-center': '#FEF2F2',
            '--color-facet-1': '#DC2626', '--color-facet-12': '#B91C1C', '--color-facet-13': '#7F1D1D',
            '--color-facet-3': '#FED7D7', '--color-facet-5': '#FEB2B2', '--color-facet-7': '#FC8181',
            '--color-facet-9': '#FEB2B2', '--color-facet-11': '#FED7D7',
            '--color-facet-2': '#EF4444', '--color-facet-4': '#FC8181', '--color-facet-6': '#DC2626',
            '--color-facet-8': '#B91C1C', '--color-facet-10': '#991B1B', '--color-facet-14': '#EF4444',
            '--color-facet-15': '#DC2626'
        }
    },
    {
        name: "26. Midnight Veil by Grok",
        tokens: {
            '--color-stroke-all': '#1E1B4B', '--color-fill-center': '#F8FAFC',
            '--color-facet-1': '#3730A3', '--color-facet-12': '#312E81', '--color-facet-13': '#1E1B4B',
            '--color-facet-3': '#C7D2FE', '--color-facet-5': '#A5B4FC', '--color-facet-7': '#818CF8',
            '--color-facet-9': '#A5B4FC', '--color-facet-11': '#C7D2FE',
            '--color-facet-2': '#4F46E5', '--color-facet-4': '#818CF8', '--color-facet-6': '#3730A3',
            '--color-facet-8': '#312E81', '--color-facet-10': '#1E1B4B', '--color-facet-14': '#4F46E5',
            '--color-facet-15': '#3730A3'
        }
    },
    {
        name: "27. Celestial Whisper by Grok",
        tokens: {
            '--color-stroke-all': '#2D1B69', '--color-fill-center': '#F3F4F6',
            '--color-facet-1': '#7C3AED', '--color-facet-12': '#6D28D9', '--color-facet-13': '#4C1D95',
            '--color-facet-3': '#DDD6FE', '--color-facet-5': '#C4B5FD', '--color-facet-7': '#A78BFA',
            '--color-facet-9': '#C4B5FD', '--color-facet-11': '#DDD6FE',
            '--color-facet-2': '#8B5CF6', '--color-facet-4': '#A78BFA', '--color-facet-6': '#7C3AED',
            '--color-facet-8': '#6D28D9', '--color-facet-10': '#5B21B6', '--color-facet-14': '#8B5CF6',
            '--color-facet-15': '#7C3AED'
        }
    },
    {
        name: "28. Crystal Glass Diamond",
        tokens: {
            '--color-stroke-all': '#5F9EA0', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#B0E0E6', '--color-facet-12': '#4682B4', '--color-facet-13': '#000080',
            '--color-facet-3': '#E0FFFF', '--color-facet-5': '#F0FFFF', '--color-facet-7': '#E0FFFF',
            '--color-facet-9': '#AFEEEE', '--color-facet-11': '#F0FFFF',
            '--color-facet-2': '#87CEEB', '--color-facet-4': '#AFEEEE', '--color-facet-6': '#00CED1',
            '--color-facet-8': '#48D1CC', '--color-facet-10': '#20B2AA', '--color-facet-14': '#00CED1',
            '--color-facet-15': '#87CEEB',
        }
    },
    {
        name: "29. Transparent Crystal Glass Diamond",
        tokens: {
            '--color-stroke-all': '#B0C4DE', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#E6F3FF', '--color-facet-12': '#6495ED', '--color-facet-13': '#0000FF',
            '--color-facet-3': '#F0FFFF', '--color-facet-5': '#F5FFFF', '--color-facet-7': '#F0FFFF',
            '--color-facet-9': '#E0FFFF', '--color-facet-11': '#F5FFFF',
            '--color-facet-2': '#B0E0E6', '--color-facet-4': '#E0FFFF', '--color-facet-6': '#87CEFA',
            '--color-facet-8': '#AFEEEE', '--color-facet-10': '#87CEEB', '--color-facet-14': '#87CEFA',
            '--color-facet-15': '#B0E0E6',
        }
    },
    // facet3: F0FFFF, facet7: #F0FFFF
    {
        name: "30. Real Diamond Clarity",
        tokens: {
            '--color-stroke-all': '#B0C4DE', '--color-fill-center': '#FFFFFF',
            '--color-facet-1': '#E6F3FF', '--color-facet-12': '#8A2BE2', '--color-facet-13': '#8A2BE2',
            '--color-facet-3': '#ffd79f', '--color-facet-5': '#F5FFFF', '--color-facet-7': '#ffd79f',
            '--color-facet-9': '#E0FFFF', '--color-facet-11': '#F5FFFF',
            '--color-facet-2': '#B0E0E6', '--color-facet-4': '#E0FFFF', '--color-facet-6': '#87CEFA',
            '--color-facet-8': '#AFEEEE', '--color-facet-10': '#87CEEB', '--color-facet-14': '#87CEFA',
            '--color-facet-15': '#B0E0E6',
        }
    },
    {
        name: "31. v5 (Midnight Aurora)",
        gradient: { stops: [['0', '#f0d89a'], ['.45', '#a8d8ff'], ['1', '#c8b8ff']] },
        tokens: {
            '--color-stroke-all': '#26263A', '--color-fill-center': '#26263A',
            '--color-facet-1': '#26263A', '--color-facet-12': '#2D2D44', '--color-facet-13': '#35354F',
            '--color-facet-3': '#35354F', '--color-facet-5': '#2D2D44', '--color-facet-7': '#26263A',
            '--color-facet-9': '#35354F', '--color-facet-11': '#2D2D44',
            '--color-facet-2': '#2D2D44', '--color-facet-4': '#26263A', '--color-facet-6': '#35354F',
            '--color-facet-8': '#2D2D44', '--color-facet-10': '#26263A', '--color-facet-14': '#2D2D44',
            '--color-facet-15': '#35354F'
        }
    },
    {
        name: "32. v5 Dark (Midnight Aurora)",
        bg: "bg-slate-900 border-slate-700",
        text: "text-white",
        gradient: { stops: [['0', '#f0d89a'], ['.45', '#a8d8ff'], ['1', '#c8b8ff']] },
        tokens: {
            '--color-stroke-all': '#26263A', '--color-fill-center': '#26263A',
            '--color-facet-1': '#26263A', '--color-facet-12': '#2D2D44', '--color-facet-13': '#35354F',
            '--color-facet-3': '#35354F', '--color-facet-5': '#2D2D44', '--color-facet-7': '#26263A',
            '--color-facet-9': '#35354F', '--color-facet-11': '#2D2D44',
            '--color-facet-2': '#2D2D44', '--color-facet-4': '#26263A', '--color-facet-6': '#35354F',
            '--color-facet-8': '#2D2D44', '--color-facet-10': '#26263A', '--color-facet-14': '#2D2D44',
            '--color-facet-15': '#35354F'
        }
    },
    {
        name: "33. v5 Swap (Midnight Aurora)",
        gradient: { stops: [['0', '#f0d89a'], ['.45', '#a8d8ff'], ['1', '#c8b8ff']], target: 'facets', units: 'userSpaceOnUse', x1: 100, y1: 100, x2: 1880, y2: 1420 },
        tokens: {
            '--color-stroke-all': '#35354F', '--color-fill-center': '#35354F',
            '--color-facet-1': '#26263A', '--color-facet-12': '#2D2D44', '--color-facet-13': '#35354F',
            '--color-facet-3': '#35354F', '--color-facet-5': '#2D2D44', '--color-facet-7': '#26263A',
            '--color-facet-9': '#35354F', '--color-facet-11': '#2D2D44',
            '--color-facet-2': '#2D2D44', '--color-facet-4': '#26263A', '--color-facet-6': '#35354F',
            '--color-facet-8': '#2D2D44', '--color-facet-10': '#26263A', '--color-facet-14': '#2D2D44',
            '--color-facet-15': '#35354F'
        }
    }
];