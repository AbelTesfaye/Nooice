module.exports = (config, bot, callbackQuery) => {
  bot.sendChatAction(callbackQuery.message.chat.id, 'typing');

  const { latitude, longitude } = callbackQuery.message.reply_to_message.location;
  const inlineKeyboard = config.BANKS.map((bank, index) => [{ text: bank, callback_data: JSON.stringify({ type: 'B', i: index, l: [latitude, longitude] }) }]);

  bot.answerCallbackQuery(callbackQuery.id, 'NOOICE!', false);
  bot.sendMessage(callbackQuery.message.chat.id, 'የማን ነው?', {
    reply_to_message_id: callbackQuery.message.reply_to_message.message_id,
    reply_markup: JSON.stringify({
      inline_keyboard: inlineKeyboard,
    }),
  });
};
