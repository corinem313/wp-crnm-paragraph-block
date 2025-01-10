import { registerFormatType, getActiveFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Popover, TextControl, Button } from '@wordpress/components';

const TooltipButton = ({ isActive, value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tooltipText, setTooltipText] = useState('');

    // Get the active tooltip format (if any)
    const activeFormat = getActiveFormat(value, 'custom/tooltip');

    const applyTooltip = () => {
        const newAttributes = {
            'aria-describedby': activeFormat
                ? activeFormat.attributes['aria-describedby'] // Preserve the same ID
                : `tooltip-${Date.now()}`,
            'data-tooltip-text': tooltipText,
        };

        // Apply or update the tooltip format
        const newValue = wp.richText.applyFormat(value, {
            type: 'custom/tooltip',
            attributes: newAttributes,
        });

        onChange(newValue);
        setIsEditing(false);
    };

    const removeTooltip = () => {
        // Remove the tooltip format
        const newValue = wp.richText.removeFormat(value, 'custom/tooltip');
        onChange(newValue);
        setTooltipText('');
        setIsEditing(false);
    };

    const startEditing = () => {
        if (activeFormat) {
            // Populate the current tooltip text if editing
            setTooltipText(activeFormat.attributes['data-tooltip-text'] || '');
        }
        setIsEditing(true);
    };

    return (
        <>
            <RichTextToolbarButton
                icon="editor-code"
                title="Tooltip"
                onClick={startEditing}
                isActive={isActive}
            />
            {isEditing && (
                <Popover position="bottom center" onClose={() => setIsEditing(false)}>
                    <div style={{ padding: '10px', width: '350px' }}>
                        <TextControl
                            label="Tooltip Text"
                            value={tooltipText}
                            onChange={setTooltipText}
                        />
                        <Button
                            isPrimary
                            onClick={applyTooltip}
                            style={{ marginRight: '10px' }}
                        >
                            Apply
                        </Button>
                        {isActive && (
                            <Button isSecondary onClick={removeTooltip}>
                                Remove
                            </Button>
                        )}
                    </div>
                </Popover>
            )}
        </>
    );
};

registerFormatType('custom/tooltip', {
    title: 'Tooltip',
    tagName: 'span',
    className: 'tooltip',
    attributes: {
        'aria-describedby': 'aria-describedby',
        'data-tooltip-text': 'data-tooltip-text',
    },
    edit: TooltipButton,
});
